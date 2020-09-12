/*
 * MyVideosPage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import DashboardLayout from 'layouts/DashboardLayout';
import Filters, { filtersItem } from 'components/Filters';
import { Grid } from '@material-ui/core';
import VideoList from 'components/VideoList';
import { connect } from 'react-redux';
import { makeSelectMyVideosList } from 'containers/App/selectors';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { getMyVideosAction } from 'containers/App/actions';
import { VIDEO_STATE_BLOCKED } from 'utils/constants';

const VidoesWrapper = styled.div``;

export function MyVideosPage({ videos, getMyVideos }) {
  const [filter, setFilter] = useState(filtersItem.all);
  useEffect(() => {
    getMyVideos();
  }, []);

  function chnageItemSelected() {
    switch (filter) {
      case filtersItem.republished:
        return videos.data.filter(video => video.republished);
      case filtersItem.unpublished:
        return videos.data.filter(video => video.state === VIDEO_STATE_BLOCKED);
      case filtersItem.playList:
        return videos.data.filter(
          video => video.playlists && video.playlists.length,
        );
      default:
        return videos.data;
    }
  }
  return (
    <VidoesWrapper>
      <Helmet>
        <title>ویدئو های من</title>
        <meta name="description" content="ویدئو های من" />
      </Helmet>
      <DashboardLayout>
        <Filters value={filter} onChange={setFilter} />
        <Grid>
          <VideoList videos={chnageItemSelected()} />
        </Grid>
      </DashboardLayout>
    </VidoesWrapper>
  );
}

MyVideosPage.propTypes = {
  videos: PropTypes.object,
  getMyVideos: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  videos: makeSelectMyVideosList(),
});
function mapDispatchToProps(dispatch) {
  return {
    getMyVideos: params => dispatch(getMyVideosAction(params)),
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
