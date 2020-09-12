import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Grid, Button } from '@material-ui/core';
import { Check as CheckIcon, Add as AddIcon } from '@material-ui/icons';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  unfollowChannelAction,
  followChannelAction,
} from 'containers/App/actions';
import { filtersItem } from './Filter';

const FollowItemWrapper = styled(Grid)`
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
    width: 100px;
    height: 100px;
    margin: auto;
    border-radius: 100%;
    display: block;
    margin: auto;
  }
  & .channelDetail {
    text-align: center;
  }

  & .button {
    display: block;
    margin: 0.5em auto;
    border-radius: 25px;
    position: relative;
    & .MuiSvgIcon-root {
      position: relative;
      top: 0.2em;
    }
  }
`;

function FollowItem({
  data,
  handleUnfollowChannel,
  handleFollowChannel,
  type,
}) {
  function unfollowChannel() {
    handleUnfollowChannel(data.channel.name);
  }
  function followChannel() {
    handleFollowChannel(data.channel.name);
  }

  console.log(data);

  const IS_FOLLOWER = type === filtersItem.followers;
  const CAN_FOLLOW =
    (!IS_FOLLOWER && data.followBtn) || (IS_FOLLOWER && !data.followBtn);

  return (
    <FollowItemWrapper>
      <img className="item_image" src={data.avatar} alt={data.title} />
      <div className="channelDetail">
        <p>
          <b className="item_title">{data.name}</b>
        </p>
        <span>{0}ویدئو</span>.<span>{0} دنبال کننده</span>
      </div>
      {CAN_FOLLOW && (
        <Button
          variant="contained"
          color="secondary"
          className="button"
          onClick={followChannel}
        >
          <span>دنبال کردن</span>
          <AddIcon />
        </Button>
      )}
      {!CAN_FOLLOW && (
        <Button
          variant="outlined"
          color="default"
          className="button"
          onClick={unfollowChannel}
        >
          <span>دنبال شده</span>
          <CheckIcon />
        </Button>
      )}
    </FollowItemWrapper>
  );
}

FollowItem.propTypes = {
  data: PropTypes.object.isRequired,
  handleUnfollowChannel: PropTypes.func.isRequired,
  type: PropTypes.oneOf([filtersItem.followers, filtersItem.following])
    .isRequired,
  handleFollowChannel: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    handleUnfollowChannel: channelName =>
      dispatch(unfollowChannelAction(channelName)),
    handleFollowChannel: channelName =>
      dispatch(followChannelAction(channelName)),
  };
}

const withStore = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withStore(FollowItem);
