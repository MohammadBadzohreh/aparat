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
  following: 'following',
  followers: 'followers',
};
function Filter({ value, onFilterChange }) {
  const [selectedItem, setSelectedItem] = useState(value);

  function changeSelected(item) {
    setSelectedItem(item);
    onFilterChange(item);
  }
  return (
    <FilterWrapper>
      <Button
        className={`filters ${
          selectedItem === filtersItem.following ? 'selected' : ''
        }`}
        onClick={() => changeSelected(filtersItem.following)}
      >
        کانال دنبال شده
      </Button>
      <Button
        className={`filters ${
          selectedItem === filtersItem.followers ? 'selected' : ''
        }`}
        onClick={() => changeSelected(filtersItem.followers)}
      >
        دنبال کنندگان شما
      </Button>
    </FilterWrapper>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onFilterChange: PropTypes.func.isRequired,
};
Filter.defaultProps = {
  value: filtersItem.following,
};
export default memo(Filter);
