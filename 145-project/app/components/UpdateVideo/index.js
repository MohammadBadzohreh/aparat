/**
 *
 * ErrorBox
 *
 */

import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  Grid,
  TextField,
  Button,
  Tooltip,
  FormControlLabel,
  Switch,
} from '@material-ui/core';
import { FileCopy as FileCopyIcon } from '@material-ui/icons';
import TagSelectBox from 'components/TagSelectBox';
import CategoriesSelectBox from 'components/CategoriesSelectBox';
import PlayListSelectBox from 'components/PlayListSelectBox';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectUploadedBanner,
  makeSelectUpdatedVideo,
} from 'containers/App/selectors';
import {
  bannerUploadAction,
  updateVideoAction,
  clearUpdatedVideoAction,
} from 'containers/App/actions';
import { compose } from 'redux';
import { push } from 'connected-react-router';
import { SHOW_VIDEO_ROUTE } from 'containers/App/routes';
import Dump from 'components/Dump';
import { BASE_URL } from 'utils/constants';
import ErrorBox from 'components/ErrorBox';
const UpdateVideoWrapper = styled(Grid)`
  [type='file'] {
    display: none;
  }
  max-width: 800px;
  margin: auto !important;
  & .video_image {
    width: 100%;
    height: 200px;
  }
  & .inputWrapper {
    margin-bottom: 1rem;
    label {
      font-weight: bold;
    }
  }
  & .button {
    margin-top: 0.35em;
    margin-bottom: 0.35em;
  }
  & .videoAddress {
    margin-top: 1rem;
    border: 1px solid #d7d7d7;
    box-shadow: 1px 1px 4px #ededed;
    padding: 15px 20px;
    position: relative;
    font-size: 1rem;
  }
  .address {
    text-align: left;
    font-size: 0.9rem;
    margin-top: 10px;
    padding: 15px 30px;
  }
  .file_copy_icon {
    position: absolute;
    left: 7%;
    cursor: pointer;
  }
`;

function UpdateVideo({
  video,
  uploadedBanner,
  onUpdateVideo,
  updatedVideo,
  onSelectBanner,
  clearUpdateVideo,
  redirectTo,
}) {
  const [videoData, setVideoData] = useState(video);

  useEffect(() => {
    if (updatedVideo.data) {
      redirectTo(SHOW_VIDEO_ROUTE.replace(':slug', video.slug));
    }
  });
  useEffect(() => {
    return clearUpdateVideo;
  }, []);

  let copyElementRef = null;
  let selectBannerRef = null;

  function changeData(key, value) {
    const newData = { ...videoData, [key]: value };
    setVideoData(newData);
  }

  function handleSelectBanner() {
    if (selectBannerRef.files && selectBannerRef.files[0]) {
      onSelectBanner(selectBannerRef.files[0]);
    }
  }
  function handleShowVideo() {
    redirectTo(SHOW_VIDEO_ROUTE.replace(':slug', video.slug));
  }
  function handleCopyAddress() {
    const range = document.createRange();
    range.selectNode(copyElementRef);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
  }
  function handelCommentChange(event) {
    setVideoData({
      ...videoData,
      enable_comment: Number(event.target.checked),
    });
  }
  function getBanner() {
    if (uploadedBanner.data && uploadedBanner.data.banner)
      return `${BASE_URL}/videos/tmp/${uploadedBanner.data.banner}`;
    return video.banner_link;
  }

  function disabledEdit() {
    if (uploadedBanner.data) {
      return false;
    }
    return JSON.stringify(videoData) === JSON.stringify(video);
  }

  function handleUpdateVideo() {
    let newVideoData = {};
    Object.entries(videoData).forEach(([key, value]) => {
      if (videoData[key] !== video[key]) {
        newVideoData[key] = value;
      }
    });
    if (uploadedBanner.data && uploadedBanner.data.banner) {
      newVideoData = { ...newVideoData, banner: uploadedBanner.data.banner };
    }

    onUpdateVideo(video.slug, newVideoData);
  }
  return (
    <UpdateVideoWrapper container spacing={2}>
      <Grid item xs={12} md={7}>
        <Grid item xs={12} className="inputWrapper">
          <label htmlFor="inp-title">عنوان ویدئو</label>
          <TextField
            fullWidth
            id="inp-title"
            className="input"
            variant="outlined"
            defaultValue={video.title}
            onChange={e => changeData('title', e.target.value)}
          />
          <p>
            عنوان ویدیو معرف ویدیو شماست. انتخاب عنوان خوب در جذب کاربران بسیار
            موثر است.
          </p>
        </Grid>

        <Grid item xs={12} className="inputWrapper">
          <label htmlFor="inp-info">توضیحات اضافه</label>
          <TextField
            fullWidth
            id="inp-info"
            multiline
            rows={3}
            rowsMax={3}
            className="input"
            variant="outlined"
            defaultValue={video.info}
            onChange={e => changeData('info', e.target.value.trim())}
          />
          <p>
            در توضیحات اضافه میتوانید محل وقوع حادثه، تاریخ رخ دادن آن یا هر
            نکته دیگری که مربوط به ویدیو میشود را وارد کنید.
          </p>
        </Grid>

        <Grid item xs={12} className="inputWrapper">
          <label htmlFor="inp-category">برچسپ ها</label>

          <TagSelectBox
            fullWidth
            id="inp-category"
            variant="outlined"
            className="input"
            max={5}
            value={video.tags}
            onChange={value => changeData('tags', value)}
          />
          <p>
            برچسب ها ، عبارات کلیدی ویدیو شما می باشند که با انتخاب درست آنها
            میتوانید رابطه بین ویدیو خود و ویدیو های مشابه را قوی تر کنید.
          </p>
        </Grid>
        <Grid item xs={12} className="inputWrapper">
          <label htmlFor="inp-category">دسته بندی آپارات</label>

          <CategoriesSelectBox
            id="inp-category"
            className="input"
            value={video.category_id}
            onChange={value => changeData('category_id', value)}
          />
        </Grid>

        <Grid item xs={12} className="inputWrapper">
          <label htmlFor="inp-playlist-channel">لیست پخش</label>

          <PlayListSelectBox
            id="inp-playlist-channel"
            className="input"
            value={video.playlist}
            onChange={value => changeData('playlist', value)}
          />
        </Grid>
        <Grid item xs={12} className="inputWrapper">
          <label htmlFor="inp-category-channel">دسته بندی کانال</label>

          <CategoriesSelectBox
            id="inp-category-channel"
            channel
            className="input"
            value={video.personal_category_id}
            onChange={value => changeData('personal_category_id', value)}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} md={5}>
        <img className="video_image" src={getBanner()} alt={video.title} />

        <input
          type="file"
          ref={el => {
            selectBannerRef = el;
          }}
          onChange={handleSelectBanner}
        />

        <Button
          fullWidth
          color="default"
          variant="outlined"
          onClick={() => selectBannerRef.click()}
          disabled={!!uploadedBanner.file}
        >
          بارگزاری تصویر
        </Button>
        {uploadedBanner.error && (
          <ErrorBox
            error={uploadedBanner.error}
            forceMessge="در بارگزاری تصویر خطایی به وجود آمده است"
          />
        )}
        <FormControlLabel
          control={
            <Switch
              checked={!!videoData.enable_comment}
              onChange={handelCommentChange}
              name="checkedB"
              color="primary"
            />
          }
          label="امکان ثبت نظر"
        />
        <div className="videoAddress">
          <b>آدرس ویدئو</b>
          <Tooltip title="کپی کردن عنوان ویدئو">
            <FileCopyIcon
              className="file_copy_icon"
              onClick={handleCopyAddress}
            />
          </Tooltip>
          <div
            className="address"
            ref={el => {
              copyElementRef = el;
            }}
          >
            {`${window.location.origin}/${video.slug}/view`}
          </div>
        </div>
        <Grid>
          {updatedVideo.error && <ErrorBox error={updatedVideo.error} />}
          <Button
            fullWidth
            className="button"
            color="default"
            variant="outlined"
            onClick={handleShowVideo}
          >
            مشاهده ویدئو
          </Button>
          <Button
            fullWidth
            className="button"
            color="secondary"
            variant="contained"
            disabled={disabledEdit()}
            onClick={handleUpdateVideo}
          >
            ویرایش ویدئو
          </Button>
        </Grid>
      </Grid>
    </UpdateVideoWrapper>
  );
}

UpdateVideo.propTypes = {
  video: PropTypes.object.isRequired,
  uploadedBanner: PropTypes.object,
  onSelectBanner: PropTypes.func.isRequired,
  redirectTo: PropTypes.func.isRequired,
  onUpdateVideo: PropTypes.func.isRequired,
  updatedVideo: PropTypes.object.isRequired,
  clearUpdateVideo: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  uploadedBanner: makeSelectUploadedBanner(),
  updatedVideo: makeSelectUpdatedVideo(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSelectBanner: banner => dispatch(bannerUploadAction(banner)),
    redirectTo: url => dispatch(push(url)),
    clearUpdateVideo: () => dispatch(clearUpdatedVideoAction()),
    onUpdateVideo: (slug, params) => dispatch(updateVideoAction(slug, params)),
  };
}

const withStore = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  memo,
  withStore,
)(UpdateVideo);
