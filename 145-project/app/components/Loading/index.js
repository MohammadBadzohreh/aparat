import React from 'react';
import styled from 'styled-components';
import loadingImage from './loading.gif';
const LoadingWrapper = styled.div`
  position: fixed;
  background-color: rgba(100, 100, 100, 0.5);
  background-image: url(${loadingImage});
  background-position: center;
  background-repeat: no-repeat;
  z-index: 10000;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
`;

function Loading() {
  return <LoadingWrapper />;
}

export default Loading;
