/**
 *
 * VideoShowPage
 *
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  getVideoInfoAction,
  getVideosStatisticsAction,
  clearVideoInfoAction,
} from 'containers/App/actions';
import {
  makeSelectVideoInfo,
  makeSelectVideoStatistics,
} from 'containers/App/selectors';
import DashboardLayout from 'layouts/DashboardLayout';
import VideoShow from './VideoShow';
import VideoStaticCard from './VideoStaticCard';
import VideoStatistics from './VideoStatistics';

const InfoWrapper = styled.div`
  max-width: 900px !important;
  margin: auto !important;
  padding: 0;
  margin: auto;
  canvas {
    max-width: 100%;
  }
`;

export function VideoShowPage({
  match,
  getVideoInfo,
  clearVideoData,
  videoStatistics,
  getStatistics,
  video,
}) {
  const [range, setRange] = useState(7);

  useEffect(() => {
    getVideoInfo(match.params.slug);
    return clearVideoData;
  }, []);

  useEffect(() => {
    getStatistics(match.params.slug, range);
  }, [range]);

  function todayViews() {
    let result = 0;
    if (videoStatistics.data) {
      Object.entries(videoStatistics.data.views).forEach(([dt, value]) => {
        if (
          !moment()
            .startOf('day')
            .diff(dt, 'days')
        ) {
          result += value;
        }
      });
    }

    return result;
  }

  function handleRangeChange(value) {
    setRange(value);
  }

  return (
    <DashboardLayout>
      <Helmet>
        <title>VideoShowPage</title>
        <meta name="description" content="Description of VideoShowPage" />
      </Helmet>
      <InfoWrapper>
        {video.data && <VideoShow video={video.data} />}
        {video.data && (
          <VideoStaticCard video={video.data} todayviews={todayViews()} />
        )}
        {videoStatistics.data && videoStatistics.data.views && (
          <VideoStatistics
            data={videoStatistics.data.views}
            range={range}
            handleChange={handleRangeChange}
          />
        )}
      </InfoWrapper>
    </DashboardLayout>
  );
}

VideoShowPage.propTypes = {
  video: PropTypes.object,
  getVideoInfo: PropTypes.func.isRequired,
  match: PropTypes.object,
  getStatistics: PropTypes.func.isRequired,
  clearVideoData: PropTypes.func.isRequired,
  videoStatistics: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  video: makeSelectVideoInfo(),
  videoStatistics: makeSelectVideoStatistics(),
});

function mapDispatchToProps(dispatch) {
  return {
    getVideoInfo: slug => dispatch(getVideoInfoAction(slug)),
    getStatistics: (slug, params) =>
      dispatch(getVideosStatisticsAction(slug, params)),
    clearVideoData: () => dispatch(clearVideoInfoAction()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(VideoShowPage);
