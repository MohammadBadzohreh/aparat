import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import {
  Input,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Chip,
  Checkbox,
  ListItemText,
  TextField,
  Button,
} from '@material-ui/core';
import { makeSelectTags, makeSelectAddedTags } from 'containers/App/selectors';
import { Add as AddIcon } from '@material-ui/icons';
import { addTagAction } from 'containers/App/actions';

const Wrapper = styled.div`
  & .formControl {
    width: 100%;
    direction: lrt;
  }

  & .MuiSelect-selectMenu {
    border: 1px solid #c4c4c4;
    border-radius: 4px;
    background: #fff;
  }

  & .chips {
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
  }

  & .chip {
    width: auto;
    background: #df1051;
    margin: 2px;

    & .MuiChip-deleteIcon {
      margin: 0;
      margin-left: 5px;
      color: #fff;
    }
  }

  & .chip-empty {
    width: auto;
    font-weight: 400;
    padding: 6px;
    display: inline-block;
  }
  .MuiMenu-paper {
    max-height: calc(100% - 97px);
  }
`;
const StyledButton = styled(Button)`
  color: green !important;
`;

function TagSelectBox({
  value,
  label,
  max,
  tags,
  onChange,
  options,
  handleAddTag,
  addedTags,
}) {
  const data = { tags: options };
  if (tags.data !== null) {
    data.tags = tags.data;
  }

  const [selectedItems, setSelectedItems] = useState(value);
  const [searchText, setSearchText] = useState('');

  function handleChange(e) {
    const val = e.target.value.filter(item => item !== undefined);
    if (val) {
      setSelectedItems(val);
      onChange(val);
    }
  }
  useEffect(() => {
    if (addedTags) {
      setSelectedItems(
        tags.data.filter(item => item.isNew).map(item => item.id),
      );
      setSearchText('');
      handleAddTag(null);
    }
  });

  function handleDeleteItem(val) {
    const newItems = selectedItems.filter(item => item !== val);
    setSelectedItems(newItems);
    onChange(newItems);
  }

  function getOptionLabel(id) {
    return data.tags && data.tags.filter(item => item.id === id)[0].title;
  }
  function renderItems() {
    const filtered = data.tags.filter(
      item => !item.isNew && item.title.lastIndexOf(searchText) >= 0,
    );
    const newFiltered = data.tags.filter(item => item.isNew);

    return [
      <MenuItem key="search">
        <TextField
          fullWidth
          autoFocus
          value={searchText}
          onChange={e => setSearchText(e.target.value.trim())}
          InputProps={{
            endAdornment: !filtered.length ? (
              <StyledButton
                size="small"
                variant="text"
                onClick={() => handleAddTag(searchText)}
              >
                <AddIcon />
              </StyledButton>
            ) : null,
          }}
        />
      </MenuItem>,

      [...newFiltered, ...filtered].map(item => (
        <MenuItem key={item.id} value={item.id}>
          <Checkbox checked={selectedItems.indexOf(item.id) > -1} />
          <ListItemText primary={`#${item.title}`} />
        </MenuItem>
      )),
    ];
  }

  return (
    <Wrapper>
      <FormControl className="formControl">
        {label && (
          <InputLabel htmlFor="select-multiple-chip">{label}</InputLabel>
        )}
        <Select
          multiple
          displayEmpty
          value={selectedItems}
          input={<Input id="select-multiple-chip" />}
          renderValue={selected => (
            <div className="chips">
              {!selected.length ? (
                <span className="chip-empty">
                  یک یا چند مورد را انتخاب کنید
                </span>
              ) : (
                selected.map(val => (
                  <Chip
                    key={val}
                    className="chip"
                    label={getOptionLabel(val)}
                    onDelete={() => handleDeleteItem(val)}
                  />
                ))
              )}
            </div>
          )}
          onChange={handleChange}
        >
          {selectedItems.length >= max ? (
            <MenuItem>شما تنها قادر به انتخاب {max} مورد هستید</MenuItem>
          ) : (
            renderItems()
          )}
        </Select>
      </FormControl>
    </Wrapper>
  );
}

TagSelectBox.propTypes = {
  tags: PropTypes.object,
  value: PropTypes.array,
  max: PropTypes.number,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array,
  addedTags: PropTypes.object,
  handleAddTag: PropTypes.func.isRequired,
};

TagSelectBox.defaultProps = {
  max: 5,
  options: [],
};

const mapStateToProps = createStructuredSelector({
  tags: makeSelectTags(),
  addedTags: makeSelectAddedTags(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleAddTag: tag => dispatch(addTagAction(tag)),
  };
}

const withStore = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  memo,
  withStore,
)(TagSelectBox);
