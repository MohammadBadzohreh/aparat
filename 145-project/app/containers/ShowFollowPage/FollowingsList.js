import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import FollowItem from './FollowItem';
import { filtersItem } from './Filter';

const FollowListWrapper = styled(Grid)`
  & {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 30px;
  }
`;

function FollowingsList({ data, type }) {
  return (
    <FollowListWrapper>
      {data &&
        data.map(item => <FollowItem key={item.id} data={item} type={type} />)}
    </FollowListWrapper>
  );
}

FollowingsList.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  type: PropTypes.oneOf([filtersItem.followers, filtersItem.following])
    .isRequired,
};

export default memo(FollowingsList);
