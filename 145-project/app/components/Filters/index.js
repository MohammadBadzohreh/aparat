import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Grid } from '@material-ui/core';

const FilterWrapper = styled(Grid)`
  & {
    text-align: center;
  }
  & .filters {
    background: #ededed;
    padding: 0.75em 1em;
    border-radius: 30px;
    margin-top: 20px;
    marign-bottom: 20px;
    margin-left: 5px;
    &.selected {
      color: #fff;
      background: #4f4d4d;
    }
  }
`;
export const filtersItem = {
  all: 'all',
  unpublished: 'unpublished',
  playList: 'playList',
  republished: 'republished',
};
function Filters({ value, onChange }) {
  const [selectedItem, setSelectedItem] = useState(value);

  function changeSelected(item) {
    setSelectedItem(item);
    onChange(item);
  }
  return (
    <FilterWrapper>
      <Button
        className={`filters ${
          selectedItem === filtersItem.all ? 'selected' : ''
        }`}
        onClick={() => changeSelected(filtersItem.all)}
      >
        همه ویدئو ها
      </Button>
      <Button
        className={`filters ${
          selectedItem === filtersItem.unpublished ? 'selected' : ''
        }`}
        onClick={() => changeSelected(filtersItem.unpublished)}
      >
        ویدئو های با نشر نشده
      </Button>
      <Button
        className={`filters ${
          selectedItem === filtersItem.playList ? 'selected' : ''
        }`}
        onClick={() => changeSelected(filtersItem.playList)}
      >
        ویدئو های لیست پخش
      </Button>
      <Button
        className={`filters ${
          selectedItem === filtersItem.republished ? 'selected' : ''
        }`}
        onClick={() => changeSelected(filtersItem.republished)}
      >
        ویدئو های بازنشر
      </Button>
    </FilterWrapper>
  );
}

Filters.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};
Filters.defaultProps = {
  value: filtersItem.all,
};
export default memo(Filters);
