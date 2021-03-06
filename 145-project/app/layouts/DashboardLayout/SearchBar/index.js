/**
 *
 * SearchBar
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import { Search as SearchIcon, Clear as ClearIcon } from '@material-ui/icons';

const StyledWrapper = styled.div`
  border-radius: 35px;
  background: #f6f6f6;
  color: #6f7285;
  min-width: 150px;
  padding: 2px;
  position: relative;
  transition: all 500ms ease;
  max-width: 600px;
  margin: auto;

  &:hover,
  &.active {
    box-shadow: 0 0 2px 1px #e4e0e0;
    background: #fff;
  }

  & > input {
    border: none;
    outline: none;
    width: 100%;
    padding: 5px;
    padding-left: 45px;
    background: transparent;
    color: inherit;
  }

  & .clearIcon {
    position: absolute;
    left: 30px;
    top: 7px;
    font-size: 15px;
    cursor: pointer;
    color: #8e3e6d !important;
  }

  & button {
    position: absolute;
    left: 2px;
    top: 2px;
  }

  & button:hover .MuiSvgIcon-root,
  & .clearIcon:hover {
    color: #05a3e8 !important;
  }
`;

function SearchBar() {
  const [active, setActive] = useState(false);
  const [searchText, setsearchText] = useState('');

  return (
    <StyledWrapper className={active ? 'active' : ''}>
      <input
        type="text"
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        onChange={e => setsearchText(e.target.value.trim())}
        value={searchText}
        maxLength={70}
        placeholder="جستجوی ویدیو ها و کانال ها..."
      />

      {searchText && (
        <ClearIcon className="clearIcon" onClick={() => setsearchText('')} />
      )}

      <IconButton size="small">
        <SearchIcon />
      </IconButton>
    </StyledWrapper>
  );
}

SearchBar.propTypes = {};

export default memo(SearchBar);
