/**
 *
 * VideoItem
 *
 */

import React, { useState, memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { push } from 'connected-react-router';

import {
  DeleteOutline as DeleteIcon,
  EqualizerOutlined as StatisticsIcon,
  EditOutlined as EditIcon,
} from '@material-ui/icons';
import { Grid, Button } from '@material-ui/core';
import {
  VIDEO_STATE_BLOCKED,
  VIDEO_STATE_CONVERTED,
  VIDEO_STATE_PENDING,
} from 'utils/constants';
import { GET_VIDEO_ROUTE, SHOW_VIDEO_ROUTE } from 'containers/App/routes';

import {
  deleteVideoAction,
  hideDeleteVideoAction,
} from 'containers/App/actions';
import Confirm from 'components/Confirm';
import { createStructuredSelector } from 'reselect';
import { makeSelectDeletedVideo } from 'containers/App/selectors';

const VideoItemWrapper = styled(Grid)`
  margin: 3px;
  cursor: pointer;
  margin-top: 30px;
  padding: 6px;
  background-color: #fff;
  border: 1px solid #cfcfcf91;
  box-shadow: -6px 6px 5px #eee;
  width: 220px;
  position: relative;

  & .item_image {
    width: 100%;
    height: 100px;
  }
  & b {
    font-weight: 500;
    padding: 4px;
  }
  & .item_title {
    padding: 1px;
    margin-top: 2px;
    margin-bottom: 3px;
    font-size: 15px;
    font-weight: 600;
  }
  & .MuiButton-root {
    min-width: 50px;
  }
  & .item_video_actions {
    margin-top: 30px;
  }
  .duration {
    background-color: #ffb500d6;
    padding: 3px 6px;
    position: absolute;
    bottom: 117px;
    left: 5px;
  }
  & .item {
    position: absolute;
    bottom: 53px;
    left: 7px;
    background: #0085ff61;
    padding: 2px 3px;
    border-radius: 2px;
  }
  & .error {
    background-color: #ee6666;
    color: #fff;
    padding: 7px 3px 7px 19px;
    position: absolute;
    bottom: 8px;
    left: 6px;
    & span {
      position: absolute;
      top: 7px;
      left: 3px;
    }
  }
`;
const Img = styled.img``;
function VideoItem({
  data,
  deletedVideo,
  onDeleteVideo,
  handleHideDeleteError,
  handleRedirect,
}) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  function handleDeleteVideo() {
    onDeleteVideo(data.slug);
  }
  function redirectTo() {
    handleRedirect(GET_VIDEO_ROUTE.replace(':slug', data.slug));
  }
  function redirectShowVideo() {
    handleRedirect(SHOW_VIDEO_ROUTE.replace(':slug', data.slug));
  }
  return (
    <VideoItemWrapper className="video_item">
      <Img
        src={data.banner_link}
        alt={data.title}
        className="item_image"
        onClick={redirectShowVideo}
      />
      <span className="duration">00:07:01</span>
      <h2 className="item_title">{data.title}</h2>
      <b>بازدید</b>
      {data.state === VIDEO_STATE_BLOCKED && (
        <span className="item">رد شده</span>
      )}
      {data.state === VIDEO_STATE_PENDING && (
        <span className="item">در حال بررسی</span>
      )}
      {data.state === VIDEO_STATE_CONVERTED && (
        <span className="item">تبدیل شده</span>
      )}
      {data.republished && <span className="item">بازنشر</span>}
      <Grid
        className="item_video_actions"
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Confirm
          show={showDeleteModal}
          onCancel={() => setShowDeleteModal(false)}
          onOk={handleDeleteVideo}
          dialogTitle="حذف ویدئو"
        >
          ایا مطمئن به حذف این ایتم هستید؟
        </Confirm>
        <Button>
          <EditIcon color="action" onClick={redirectTo} />
        </Button>
        <Button onClick={redirectShowVideo}>
          <StatisticsIcon color="action" />
        </Button>
        <Button onClick={() => setShowDeleteModal(true)}>
          <DeleteIcon color="action" />
        </Button>
      </Grid>
      {deletedVideo && deletedVideo.error && deletedVideo.slug === data.slug && (
        <Grid className="error" onClick={handleHideDeleteError}>
          خطایی در سرور به وجود آمده است. <span>X</span>
        </Grid>
      )}
    </VideoItemWrapper>
  );
}
VideoItem.propTypes = {
  data: PropTypes.object,
  onDeleteVideo: PropTypes.func.isRequired,
  deletedVideo: PropTypes.object,
  handleHideDeleteError: PropTypes.func.isRequired,
  handleRedirect: PropTypes.func.isRequired,
};
const mapStateToProps = createStructuredSelector({
  deletedVideo: makeSelectDeletedVideo(),
});
function mapDispatchToProps(dispatch) {
  return {
    onDeleteVideo: slug => dispatch(deleteVideoAction(slug)),
    handleHideDeleteError: () => dispatch(hideDeleteVideoAction()),
    handleRedirect: url => dispatch(push(url)),
  };
}
const withStore = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(
  memo,
  withStore,
)(VideoItem);
