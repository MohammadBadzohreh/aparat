import React from 'react';
import PropTypes from 'prop-types';

import styled, { keyframes } from 'styled-components';
import aparatImage from './logo-aparat.svg';

const LoadingAnimation = keyframes`
100%{
transform:rotate(360deg);
}
`;

const LoadingTextWrapper = styled.div`
  & .loadingImage {
    animation: 1s ${LoadingAnimation} ease infinite;
    width: 40px;
    height: auto;
    float: right;
  }
  & span {
    line-height: 40px;
    padding: 10px;
    font-weight: bold;
    font-size: 14px;
  }
`;

function LoadingWithText({ title }) {
  return (
    <LoadingTextWrapper>
      <img className="loadingImage" src={aparatImage} alt="loadingImage" />
      <span>{title}</span>
    </LoadingTextWrapper>
  );
}

LoadingWithText.propTypes = {
  title: PropTypes.string,
};
LoadingWithText.defaultProps = {
  title: 'در حال بارگزاری...',
};

export default LoadingWithText;
