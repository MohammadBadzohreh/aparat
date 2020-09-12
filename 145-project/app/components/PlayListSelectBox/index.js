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
  makeSelectPlaylist,
  makeSelectAddedPlayList,
} from 'containers/App/selectors';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import { addPlaylistAction } from 'containers/App/actions';

function PlayListSelectBox({
  value,
  onChange,
  playlist,
  onAddPlayList,
  addedPlaylist,
  ...props
}) {
  const [currentValue, setCurrentValue] = useState(value);
  const [addNewItem, setaddNewItem] = useState(false);
  const [addNewItemTitle, setAddNewItemTitle] = useState('');
  const data = { playlist: [] };
  const items = {
    0: 'بدون لیست پخش',
    __add_Item__: 'افزودن لیست پخش',
  };
  if (playlist.data !== null) {
    data.playlist = playlist.data;
  }
  useEffect(() => {
    if (addedPlaylist) {
      setCurrentValue(addedPlaylist.id);
      onChange(addedPlaylist.id);
      setaddNewItem(false);
      setAddNewItemTitle('');
      onAddPlayList(null);
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
    data.playlist.forEach(element => {
      if (element.user_id === null) {
        items[element.id] = element.title;
      }
      if (element.user_id !== null) {
        items[element.id] = element.title;
      }
    });
    return items;
  }
  function handleNewItem() {
    onAddPlayList(addNewItemTitle);
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
                    type="button"
                    color="primary"
                    size="small"
                    onClick={handleNewItem}
                  />
                </IconButton>
                <IconButton>
                  <CancelCategoryIcon
                    type="button"
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
PlayListSelectBox.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  playlist: PropTypes.any.isRequired,
  onAddPlayList: PropTypes.func.isRequired,
  addedPlaylist: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  playlist: makeSelectPlaylist(),
  addedPlaylist: makeSelectAddedPlayList(),
});

function mapDispatchToProps(dispatch) {
  return {
    onAddPlayList: playListName => dispatch(addPlaylistAction(playListName)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(
  memo,
  withConnect,
)(PlayListSelectBox);
