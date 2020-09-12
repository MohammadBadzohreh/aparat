/**
 *
 * NoItem
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { SentimentVeryDissatisfiedOutlined as NoItemIcon } from '@material-ui/icons';

const NoItemWrapper = styled(Grid)``;
function NoItem({ data }) {
  return (
    <NoItemWrapper className="video_item">
      <NoItemIcon />
      <span>متاسفانه هیچ {data} یافت نشد</span>
    </NoItemWrapper>
  );
}

NoItem.propTypes = {
  data: PropTypes.string,
};

export default NoItem;
