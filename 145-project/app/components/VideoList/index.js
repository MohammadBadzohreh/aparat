/**
 *
 * VideoList
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import VideoItem from 'components/VideoItem';
import NoItem from 'components/NoItem';
const VideoListWrapper = styled(Grid)`
  & {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 30px;
  }
`;

function VideoList({ videos }) {
  console.log(videos);
  return (
    <VideoListWrapper>
      {videos && videos.map(item => <VideoItem key={item.id} data={item} />)}
      {!videos && <NoItem data="ویدئو" />}
    </VideoListWrapper>
  );
}

VideoList.propTypes = {
  videos: PropTypes.array,
};

export default memo(VideoList);
