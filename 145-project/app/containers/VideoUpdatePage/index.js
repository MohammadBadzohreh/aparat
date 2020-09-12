/**
 *
 * VideoUpdatePage
 *
 */

import React, { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import {
  getVideoInfoAction,
  clearVideoInfoAction,
} from 'containers/App/actions';
import { makeSelectVideoInfo } from 'containers/App/selectors';
import DashboardLayout from 'layouts/DashboardLayout';
import LoadingWithText from 'components/LodingWithText';
import ErrorBox from 'components/ErrorBox';
import UpdateVideo from 'components/UpdateVideo';

export function VideoUpdatePage({
  match,
  getVideoInfo,
  videoInfo,
  clearVideoData,
}) {
  useEffect(() => {
    getVideoInfo(match.params.slug);
  }, []);
  useEffect(() => {
    return clearVideoData;
  }, []);
  return (
    <DashboardLayout showSidebar={false}>
      <Helmet>
        <title>VideoUpdatePage</title>
        <meta name="description" content="Description of VideoUpdatePage" />
      </Helmet>

      {videoInfo.slug && <LoadingWithText />}
      {videoInfo.data && <UpdateVideo video={videoInfo.data} />}
      {videoInfo.error && (
        <ErrorBox
          error={videoInfo.error}
          options={{ 404: 'ویدئو مورد نظر یافت نشد. ' }}
        />
      )}
    </DashboardLayout>
  );
}

VideoUpdatePage.propTypes = {
  match: PropTypes.object.isRequired,
  getVideoInfo: PropTypes.func.isRequired,
  clearVideoData: PropTypes.func.isRequired,
  videoInfo: PropTypes.object,
};
const mapStateToProps = createStructuredSelector({
  videoInfo: makeSelectVideoInfo(),
});
function mapDispatchToProps(dispatch) {
  return {
    getVideoInfo: slug => dispatch(getVideoInfoAction(slug)),
    clearVideoData: () => dispatch(clearVideoInfoAction()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(VideoUpdatePage);
