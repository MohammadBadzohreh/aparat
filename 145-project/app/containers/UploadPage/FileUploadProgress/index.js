import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectFileUploadedProgress,
  makeSelectUploadedBanner,
} from 'containers/App/selectors';
import { Grid, Button } from '@material-ui/core';
import { BASE_URL } from 'utils/constants';

const Wrapper = styled.div`
  border: 3px dashed #dcdcdc;
  padding: 5px 20px;
  & .progressContainer {
    border: 1px solid #cbcbcb;
    border-radius: 13px;
    position: relative;
    right: 12px;

    height: 15px;
    overflow: hidden;
    & .progrsssUploaded {
      position: absolute;
      height: 200%;
      padding: 0;
      margin: 0;
      background: #06889f;
    }
  }
  & .image-container img {
    width: 50px;
  }
  & .progrssContainer {
    width: 100%;
  }
  & .uploadBannerButton {
    text-align: center;
    border: 1px dashed #0000007a;
    background-color: #cacaca;
    outline: none;
  }
  & .uploadBannerButton:hover {
    border: 1px dashed #00000054;
    background-color: #06889f29;
    color: #06889f;
  }
  & .hidden {
    display: none;
  }
`;

function FileUploadProgress({ value, banneruploaded, onChangeBanner }) {
  let selectFile = null;
  function handleChangeBanner() {
    if (selectFile.files && selectFile.files[0]) {
      onChangeBanner(selectFile.files[0]);
    }
  }
  return (
    <Wrapper>
      <Grid container>
        <Grid item className="image-container" sm={1} md={1}>
          {banneruploaded.data ? (
            <img
              src={`${BASE_URL}/videos/tmp/${banneruploaded.data.banner}`}
              alt="تصویر  ویدئو"
            />
          ) : (
            <>
              <Button
                className="uploadBannerButton"
                onClick={() => selectFile.click()}
              >
                بنر ویدئو
              </Button>
              <input
                type="file"
                ref={el => {
                  selectFile = el;
                }}
                onChange={handleChangeBanner}
                className="hidden"
              />
            </>
          )}
        </Grid>
        <Grid item className="progrssContainer" sm={11} md={11}>
          {value === 0 ? (
            <b>لطفا ویدئو را بارگزاری کنید</b>
          ) : (
            <b>({value}%)آپلود ویدئو</b>
          )}

          <div className="progressContainer">
            <div className="progrsssUploaded" style={{ width: `${value}%` }}>
              &nbsp;
            </div>
          </div>
        </Grid>
      </Grid>
    </Wrapper>
  );
}
FileUploadProgress.propTypes = {
  value: PropTypes.number,
  banneruploaded: PropTypes.any,
  onChangeBanner: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  percentage: makeSelectFileUploadedProgress(),
  banneruploaded: makeSelectUploadedBanner(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  memo,
)(FileUploadProgress);
