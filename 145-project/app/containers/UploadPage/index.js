/**
 *
 * UploadPage
 *
 */

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import { Grid, Typography, Button } from '@material-ui/core';
import { CloudUpload as UploadIcon } from '@material-ui/icons';

import {
  fileUploadAction,
  createVideoAction,
  bannerUploadAction,
  clearVideoDataAction,
} from 'containers/App/actions';
import {
  makeSelectFileUpload,
  makeSelectCreatedVideo,
  makeSelectUploadedBanner,
} from 'containers/App/selectors';
import { MYVIDEOS_ROUTE } from 'containers/App/routes';
import Layout from 'layouts/DashboardLayout';

import Loading from 'components/Loading';
import { BASE_URL } from 'utils/constants';
import FileUploadForm from './FileUploadForm';
import FileUploadProgress from './FileUploadProgress';
import FileUploadInfo from './FileUploadInfo';

const UploadWrapper = styled(Grid)`
  max-width: 700px;
  margin: auto;

  & .topTitleBar {
    border-bottom: 1px solid #ddd;
    height: 30px;
    line-height: 30px;
  }

  & .topTitleBar > span {
    border-bottom: 1px solid #666;
    display: inline-block;
    height: 100%;
    margin-top: 1px;
    padding-left: 35px;
  }

  & .topTitleBar .MuiSvgIcon-root,
  & .topTitleBar .MuiTypography-root {
    height: 100%;
    display: inline-block;
    float: right;
  }

  & .topTitleBar .MuiTypography-root {
    line-height: 30px;
    font-weight: bold;
    font-size: 0.8rem;
  }

  & .topTitleBar .MuiSvgIcon-root {
    margin: 0 5px;
  }

  & .videoUploadInfoWrapper {
    background: #f7f7f7;
    border-radius: 3px;
    box-shadow: 0 0 3px #dadada;
    padding: 1rem;
  }
  & button {
    text-align: left;
    margin: 5px 3px !important;
  }
  & .buttonContainer {
    text-align: left;
  }
`;
const UploadedVideo = styled(Grid)`
  background: #f3f3f3;
  padding: 40px;
  border: 2px dashed #acacac;
  border-radius: 3px;
  & img {
    width: 100px;
    height: auto;
  }
  & .videoDetailText {
    font-size: 15px;
  }
`;
const MyButton = styled(Button)`
  margin-right: 160px !important;
  margin-top: 20px !important;
`;
export function UploadPage({
  fileUpload,
  createdVideo,
  onSelectFile,
  onPublishVideo,
  onUploadBanner,
  uploadedBanner,
  clearVideoData,
  dispatch,
}) {
  const [videoData, setVideoData] = useState({});
  function changeBanner(file) {
    if (file) {
      onUploadBanner(file);
    }
  }
  function handleVideoPublish() {
    onPublishVideo(videoData);
  }
  function handleVideoPublishLater() {
    // todo:publish later vidoe
    alert('handleVideoPublishLater');
  }
  useEffect(() => {
    clearVideoData();
  }, []);

  return (
    <Layout showSidebar={false}>
      <Helmet>
        <title>بارگذاری ویدیو</title>
        <meta name="description" content="بارگذاری ویدیو" />
      </Helmet>
      {uploadedBanner.banner && <Loading />}

      {!createdVideo.data && (
        <UploadWrapper container>
          <Grid item xs={12}>
            <div className="topTitleBar">
              <span>
                <UploadIcon />
                <Typography variant="caption">بارگذاری ویدیو</Typography>
              </span>
            </div>
          </Grid>

          {!fileUpload.data ? (
            <Grid item xs={12}>
              <FileUploadForm onSelect={onSelectFile} />
            </Grid>
          ) : (
            <Grid item xs={12} className="videoUploadInfoWrapper">
              <FileUploadProgress
                value={fileUpload.percentage}
                onChangeBanner={changeBanner}
              />
              <FileUploadInfo
                fileData={fileUpload.data}
                onChange={data => setVideoData(data)}
              />
              <Grid className="buttonContainer">
                <Button
                  color="primary"
                  size="large"
                  variant="outlined"
                  onClick={handleVideoPublishLater}
                >
                  ذخیره کردن
                </Button>
                <Button
                  color="secondary"
                  size="large"
                  variant="outlined"
                  onClick={handleVideoPublish}
                >
                  انتشار کردن
                </Button>
              </Grid>
            </Grid>
          )}
        </UploadWrapper>
      )}
      {createdVideo.data && (
        <>
          <UploadedVideo
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            style={{
              maxWidth: '700px',
              marginRight: 'auto',
              marginLeft: 'auto',
            }}
          >
            <Grid item md={4} xs={12} justify="center">
              <img
                src={createdVideo.data.banner_link}
                alt="تصویر ویدئو آپلود شده"
              />
            </Grid>
            <Grid item md={4} xs={6}>
              <Typography className="videoDetailText" variant="caption">
                ویدئو شما با موفقیت بارگزاری شد
              </Typography>
            </Grid>
            <Grid item md={4} xs={6} style={{ textAlign: 'center' }}>
              <Button color="default" variant="outlined">
                مشاهده ویدئو
              </Button>
            </Grid>
          </UploadedVideo>
          <MyButton
            color="secondary"
            variant="outlined"
            onClick={() => dispatch(push(MYVIDEOS_ROUTE))}
          >
            مدیریت ویدئو
          </MyButton>
        </>
      )}
    </Layout>
  );
}

UploadPage.propTypes = {
  onSelectFile: PropTypes.func.isRequired,
  createdVideo: PropTypes.object,
  fileUpload: PropTypes.object.isRequired,
  onPublishVideo: PropTypes.func.isRequired,
  onUploadBanner: PropTypes.func.isRequired,
  uploadedBanner: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  clearVideoData: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  fileUpload: makeSelectFileUpload(),
  createdVideo: makeSelectCreatedVideo(),
  uploadedBanner: makeSelectUploadedBanner(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSelectFile: file => dispatch(fileUploadAction(file)),
    onPublishVideo: information => dispatch(createVideoAction(information)),
    onUploadBanner: banner => dispatch(bannerUploadAction(banner)),
    clearVideoData: () => dispatch(clearVideoDataAction()),
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(UploadPage);
