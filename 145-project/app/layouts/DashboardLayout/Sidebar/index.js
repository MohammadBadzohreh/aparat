/**
 *
 * Sidebar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import {
  AccountCircle,
  Settings as SettingIcon,
  Dashboard as DashboardIcon,
  Theaters as MovieIcon,
  ModeComment as CommentIcon,
  Subscriptions as FollowedChannelsIcon,
  PieChart as ChartIcon,
  PowerSettingsNew as LoguotIcon,
} from '@material-ui/icons';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { MYVIDEOS_ROUTE, DASHBOARD_ROUTE, COMMENT_ROUTE, FOLLOW_ROUTE,CHANNEL_STATISTICS_ROUTE, MY_CHANNNEL_ROUTE,MY_PROFILE_ROUTE } from 'containers/App/routes';
import { createStructuredSelector } from 'reselect';
import { makeSelectLocation, makeSelectUserMe } from 'containers/App/selectors';

const Wrapper = styled.div`
  width: 180px;
  background: #fff;
  box-shadow: -1px 2px 2px #eee;
  min-height: calc(100vh - 50px);





  & .channelSetting {
    background: #fff;
    display: block;
    text-align: center;
    margin-bottom: 10vh;
    cursor:pointer;
  }

  & .channelSetting .MuiSvgIcon-root,
  & .channelSetting .MuiListItemText-root {
    display: block;
    width: 100%;
    margin: auto;
    text-align: center;
  }

  & .channelSetting .MuiSvgIcon-root {
    font-size: 120px;
    width: 120px;
    color: #e5e5e5;
  }

  & .channelSetting svg {
    background: #fff;
    box-shadow: 0 0 2px 1px #e2dfdf;
    border-radius: 100%;
    padding: 0;
    display: block;
  }

  & .channelSetting .MuiTypography-root {
    font-weight: bold;
  }

  & .MuiSvgIcon-root,
  & .MuiListItemText-root {
    color: #6f7285;
  }

  & .MuiListItemText-root {
    font-size: 1rem;
  }

  & .MuiListItemIcon-root {
    min-width: 30px;
  }

  & .MuiListItemText-root {
    text-align: right;
  }

  & .settingIcon {
    position: absolute;
    left: 32px;
    top: 22px;
    background: #e5e5e5 !important;
    border: 1px solid #e1e1e1 !important;
    cursor: pointer;
    transition: opacity 130ms ease;
  }

  & .settingIcon,
  & .settingIcon svg {
    font-size: 20px !important;
    width: 20px !important;
    color: #6f7285 !important;
  }

  & .settingIcon:hover {
    opacity: 0.8;
  }

  & .logoutItem {
    position: relative;
    bottom: -180px;
}
  }

  @media (max-width: 768px) {
    & {
      display: none;
    }
  }

  @media (max-height: 560px) {
    & .channelSetting {
      margin-bottom: 0vh;
    }
  }
`;

const Img = styled.img`
width: 100%;
height: auto;
overflow: hidden;
border: 3px solid #ccc;
border-radius: 50%;
padding: 1em;`

function Sidebar({ dispatch, location,user }) {

  console.log();



  return (
    <Wrapper>
      <List component="nav">
        <ListItem className="channelSetting">
          <SettingIcon onClick={() => dispatch(push(MY_PROFILE_ROUTE))} className="settingIcon" />
          <ListItemIcon>
          <Img src={user.data.avatar} alt={user.name} onClick={() => dispatch(push(MY_CHANNNEL_ROUTE.replace(":name",user.data.channel.name)))} />
          </ListItemIcon>
          <ListItemText onClick={() => dispatch(push(MY_CHANNNEL_ROUTE.replace(":name",user.data.channel.name)))} primary={user.data.name} />
        </ListItem>

        <ListItem
          button
          selected={location.pathname === DASHBOARD_ROUTE}
          onClick={() => dispatch(push(DASHBOARD_ROUTE))}
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="داشبرد" />
        </ListItem>

        <ListItem
          button
          selected={location.pathname === MYVIDEOS_ROUTE}
          onClick={() => dispatch(push(MYVIDEOS_ROUTE))}
        >
          <ListItemIcon>
            <MovieIcon />
          </ListItemIcon>
          <ListItemText primary="ویدیوهای من" />
        </ListItem>

        <ListItem button
        onClick={()=>dispatch(push(COMMENT_ROUTE))}
        >
          <ListItemIcon>
            <CommentIcon />
          </ListItemIcon>
          <ListItemText primary="دیدگاه ها" />
        </ListItem>

        <ListItem button
          onClick={() =>dispatch(push(FOLLOW_ROUTE))}
          >
          <ListItemIcon>
            <FollowedChannelsIcon />
          </ListItemIcon>
          <ListItemText primary="کانال های دنبال شده" />
        </ListItem>

        <ListItem button
        onClick = {()=>dispatch(push(CHANNEL_STATISTICS_ROUTE))}>
          <ListItemIcon>
            <ChartIcon />
          </ListItemIcon>
          <ListItemText primary="آمار بازدید" />
        </ListItem>
      </List>

      <ListItem button className="logoutItem">
        <ListItemIcon>
          <LoguotIcon />
        </ListItemIcon>
        <ListItemText primary="خروج ازحساب کاربری" />
      </ListItem>
    </Wrapper>
  );
}

Sidebar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.any,
  user:PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
  user: makeSelectUserMe(),

});

export default connect(mapStateToProps)(Sidebar);
