import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Grid,
  Tabs,
  Tab,
  TextField,
  FormControlLabel,
  Switch,
} from '@material-ui/core';
import TagSelectBox from 'components/TagSelectBox';
import Dump from 'components/Dump';
import CategoriesSelectBox from 'components/CategoriesSelectBox';
import PlayListSelectBox from 'components/PlayListSelectBox';
import { createStructuredSelector } from 'reselect';
import { makeSelectUploadedBanner } from 'containers/App/selectors';
import { connect } from 'react-redux';
import { compose } from 'redux';

const Wrapper = styled.div`
  flex-grow: 1;
  & .input {
    direction: ltr !important;
  }
  & .MuiOutlinedInput-input {
    text-align: right;
  }

  & .tabs {
    border-bottom: 1px solid #ddd;

    & .MuiTabs-indicator {
      background-color: #666;
      height: 1px;
    }
  }

  & .tabContent {
    padding: 1rem;
  }

  & .inputWrapper {
    margin-bottom: 1rem;

    & label {
      font-weight: bold;
      padding-bottom: 0.8rem;
      display: inline-block;
    }

    & .input {
      background: #fff;
    }
  }

  }
`;

function FileUploadInfo({ fileData, banneruploaded, onChange }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const [data, setData] = useState({
    banner: null,
    video_id: null,
    title: 'عنوان ویدیو',
    category_id: 2,
    personal_category: null,
    info: 'این توضیحان هستش',
    tags: [],
    playlist: null,
    enable_comment: true,
    enable_watermark: false,
  });
  function changeData(key, value) {
    const newData = { ...data, [key]: value };
    setData(newData);
    onChange(newData);
  }

  useEffect(() => {
    if (fileData && !data.video_id) {
      setData({ ...data, video_id: fileData.video });
    }
    if (banneruploaded.data && banneruploaded.data.banner && !data.banner) {
      setData({ ...data, banner: banneruploaded.data.banner });
    }
  });

  return (
    <Wrapper>
      <Tabs
        value={selectedTab}
        onChange={(e, tabIndex) => {
          setSelectedTab(tabIndex);
        }}
        indicatorColor="primary"
        textColor="primary"
        className="tabs"
      >
        <Tab label="مشخصات ویدیو" />
        <Tab label="تنظیمات پیشترفته" />
      </Tabs>

      <Grid container>
        {selectedTab === 0 && (
          <Grid container spacing={2} className="tabContent">
            <Grid item xs={12} sm={6} className="inputWrapper">
              <TextField
                fullWidth
                id="inp-title"
                className="input"
                variant="outlined"
                label="عنوان ویدیو"
                defaultValue={data.title}
                onChange={e => changeData('title', e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={6} className="inputWrapper">
              <CategoriesSelectBox
                id="inp-category"
                className="input"
                label="دسته بندی آپارات"
                value={data.category}
                onChange={value => changeData('category', value)}
              />
            </Grid>

            <Grid item xs={12} className="inputWrapper">
              <TextField
                fullWidth
                id="inp-info"
                multiline
                rows={3}
                rowsMax={3}
                className="input"
                variant="outlined"
                label="توضیحات اضافه"
                defaultValue={data.info}
                onChange={e => changeData('info', e.target.value.trim())}
              />
            </Grid>

            <Grid item xs={12} sm={6} className="inputWrapper">
              <TagSelectBox
                fullWidth
                id="inp-category"
                variant="outlined"
                className="input"
                label="برچسپ ها"
                max={5}
                value={data.tags}
                onChange={value => changeData('tags', value)}
              />
            </Grid>
            <Grid item xs={12} sm={6} className="inputWrapper">
              <CategoriesSelectBox
                id="inp-category-channel"
                channel
                className="input"
                label="دسته بندی کانال"
                value={data.channel_category}
                onChange={value => changeData('personal_category', value)}
              />
            </Grid>
            <Grid item xs={12} sm={6} className="inputWrapper">
              <PlayListSelectBox
                id="inp-playlist-channel"
                className="input"
                label="لیست پخش"
                value={data.playlist}
                onChange={value => changeData('playlist', value)}
              />
            </Grid>
          </Grid>
        )}
        {selectedTab === 1 && (
          <Grid item className="tabContent">
            <FormControlLabel
              control={
                <Switch
                  checked={data.enable_comment}
                  onChange={event =>
                    changeData('enable_comment', event.target.checked)
                  }
                  name="enable_comment"
                  color="secondary"
                />
              }
              label="افزودن کامنت"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={data.enable_watermark}
                  onChange={event =>
                    changeData('enable_watermark', event.target.checked)
                  }
                  name="enable_watermark"
                  color="secondary"
                />
              }
              label="افزودن واترمارک"
            />
          </Grid>
        )}
      </Grid>
      <Dump data={data} />
    </Wrapper>
  );
}

FileUploadInfo.propTypes = {
  fileData: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  banneruploaded: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  banneruploaded: makeSelectUploadedBanner(),
});
const withConnect = connect(mapStateToProps);
export default compose(withConnect)(FileUploadInfo);
