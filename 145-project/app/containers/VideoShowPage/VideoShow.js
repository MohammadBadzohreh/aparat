import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid, Tooltip } from '@material-ui/core';
import {
  EditOutlined as EditIcon,
  OpenInNewOutlined as LinkIcon,
} from '@material-ui/icons';
import { createStructuredSelector } from 'reselect';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { GET_VIDEO_ROUTE } from 'containers/App/routes';
import { getAge } from 'utils/helpers';

const VideoShowWrapper = styled(Grid)`
  box-shadow: 2px 0px 3px 2px #bebebe;
  border-radius: 2px;

  background: #fafafa;
  position: relative;

  & .videoInformation {
    & .image {
      width: 100%;
      height: 150px;
      margin: 0;
    }
  }
  .content {
    padding: 0.1em 0.7em;
    .title {
      font-size: 1.5em;
    }
    .description {
      font-size: 1.1em;
    }
  }
  .icon {
    position: absolute;
    left: 1em;
    top: 1em;
    font-size: 1.3rem;
    cursor: pointer;
    background: #e7e4e4;
    transition: all 0.4s;

    border-radius: 50%;
    padding: 5px;
    width: 35px;
    height: 35px;
    &:hover {
      background: #dadada;
    }
  }
  .icon.editIcon {
    left: 3.2em;
  }
  .icon.linkIcon {
    left: 1em;
  }

  @media (max-width: 500px) {
    .image {
      width: 100% !important;
    }
  }
`;

function VideoShow({ video, redirectToEdit }) {
  function handleRedirectToUpdate() {
    redirectToEdit(GET_VIDEO_ROUTE.replace(':slug', video.slug));
  }

  return (
    <VideoShowWrapper container>
      <Grid item xs={12} sm={4} md={4} className="videoInformation">
        <img src={video.banner_link} alt={video.title} className="image" />
      </Grid>
      <Grid item xs={12} sm={8} md={8} className="content">
        <Tooltip title={video.title}>
          <h2 className="title">{video.title.substring(0, 50)}</h2>
        </Tooltip>
        <p>
          {video.views} بازدید.{getAge(video.created_age)}
        </p>

        <Tooltip title={video.info}>
          <p className="descrition">
            {video.info.substring(0, 150)}
            {video.info.length > 150 && '...'}
          </p>
        </Tooltip>
      </Grid>
      <EditIcon className="icon editIcon" onClick={handleRedirectToUpdate} />
      <LinkIcon className="icon linkIcon" onClick={handleRedirectToUpdate} />
    </VideoShowWrapper>
  );
}

VideoShow.propTypes = {
  video: PropTypes.object.isRequired,
  redirectToEdit: PropTypes.func.isRequired,
};
const mapStateToProps = createStructuredSelector({});
function mapDispatchToProps(dispatch) {
  return {
    redirectToEdit: url => dispatch(push(url)),
  };
}
const withStore = connect(
  mapStateToProps,
  mapDispatchToProps,
);
export default compose(
  memo,
  withStore,
)(VideoShow);
