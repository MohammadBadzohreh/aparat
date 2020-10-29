/*
 * coomet page
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import DashboardLayout from 'layouts/DashboardLayout';
import { connect } from 'react-redux';
import { makeSelectComments } from 'containers/App/selectors';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { getCommentsAction } from 'containers/App/actions';
import CommentItem from 'components/CommentItem';
import CommmentList from 'components/CommentList';

const VidoesWrapper = styled.div``;

export function MyVideosPage({ comments, getComments }) {
  useEffect(() => {
    getComments();
  }, []);

  return (
    <VidoesWrapper>
      <Helmet>
        <title>نظرات</title>
        <meta name="description" content="نظرات" />
      </Helmet>
      <DashboardLayout>
        <CommmentList comments={comments} />
      </DashboardLayout>
    </VidoesWrapper>
  );
}

MyVideosPage.propTypes = {
  comments: PropTypes.any,
  getComments: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  comments: makeSelectComments(),
});
function mapDispatchToProps(dispatch) {
  return {
    getComments:  ()=> dispatch(getCommentsAction()),
  };
}

const withStore = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(
  memo,
  withStore,
)(MyVideosPage);
