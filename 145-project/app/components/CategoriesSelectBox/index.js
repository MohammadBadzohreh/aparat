import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SelectBox from 'components/SelectBox';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  Add as AddCategoryIcon,
  Cancel as CancelCategoryIcon,
} from '@material-ui/icons';
import {
  makeSelectCategories,
  makeSelectAddedCategory,
} from 'containers/App/selectors';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import { addCategoryAction } from 'containers/App/actions';

function CategorySelectBox({
  channel,
  value,
  onChange,
  categories,
  onAddCategory,
  addedCategory,
  ...props
}) {
  const [currentValue, setCurrentValue] = useState(value);
  const [addNewItem, setaddNewItem] = useState(false);
  const [addNewItemTitle, setAddNewItemTitle] = useState('');
  const data = { categories: [] };
  const items = {
    0: 'بدون دسته بندی',
    __add_Item__: 'افزودن دسته بندی',
  };
  if (categories.data.length !== 0) {
    data.categories = categories.data;
  }
  useEffect(() => {
    if (addedCategory) {
      setCurrentValue(addedCategory.data.id);
      onChange(addedCategory.data.id);
      setaddNewItem(false);
      setAddNewItemTitle('');
      onAddCategory(null);
    }
  });

  function handleChange(val) {
    if (val === '__add_Item__') {
      setaddNewItem(true);
    } else {
      onChange(val === '0' ? null : val);
      setCurrentValue(val);
    }
  }

  function renderItems() {
    data.categories.forEach(element => {
      if (!channel && element.user_id === null) {
        items[element.id] = element.title;
      }
      if (channel && element.user_id !== null) {
        items[element.id] = element.title;
      }
    });
    return items;
  }
  function handleNewItem() {
    onAddCategory(addNewItemTitle);
  }
  function handleNewTitle(event) {
    setAddNewItemTitle(event.target.value);
  }

  return (
    <>
      {addNewItem ? (
        <TextField
          fullWidth
          id="Category"
          variant="outlined"
          label="افزودن دسته بندی"
          autoFocus
          value={addNewItemTitle}
          onChange={e => handleNewTitle(e)}
          onKeyDown={e => e.keyCode === 13 && handleNewItem()}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <AddCategoryIcon
                    color="primary"
                    size="small"
                    onClick={handleNewItem}
                  />
                </IconButton>
                <IconButton>
                  <CancelCategoryIcon
                    color="secondary"
                    size="small"
                    onClick={() => setaddNewItem(false)}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      ) : (
        <SelectBox
          fullWidth
          variant="outlined"
          {...props}
          options={renderItems()}
          value={currentValue}
          onChange={handleChange}
        />
      )}
    </>
  );
}
CategorySelectBox.propTypes = {
  channel: PropTypes.bool,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  categories: PropTypes.any.isRequired,
  onAddCategory: PropTypes.func.isRequired,
  addedCategory: PropTypes.object,
};
CategorySelectBox.defaultProps = {
  channel: false,
};
const mapStateToProps = createStructuredSelector({
  categories: makeSelectCategories(),
  addedCategory: makeSelectAddedCategory(),
});

function mapDispatchToProps(dispatch) {
  return {
    onAddCategory: title => dispatch(addCategoryAction(title)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(
  memo,
  withConnect,
)(CategorySelectBox);
