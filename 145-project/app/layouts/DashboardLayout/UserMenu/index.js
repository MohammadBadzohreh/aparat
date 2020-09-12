/**
 *
 * UserMenu
 *
 */

import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import styled from 'styled-components';
import {
  AccountCircle,
  Settings as SettingsIcon,
  Dashboard as DashboardIcon,
  Theaters as MovieIcon,
  ModeComment as CommentIcon,
  Subscriptions as FollowedChannelsIcon,
  PieChart as ChartIcon,
  PowerSettingsNew as LoguotIcon,
} from '@material-ui/icons';

const StyledMenu = styled(Menu)`
  margin-top: 30px;

  & .MuiSvgIcon-root {
    color: #6f7285;
  }

  & ul {
    padding-top: 0;
  }

  & li {
    padding: 0 16px;
    margin: 0;
    min-height: 30px;
    min-width: 200px;
  }

  & .channelMenu {
    min-height: 50px;
    background: #f4f4f4;
    display: block;
    text-align: right;
    padding-top: 5px;
    font-size: 0.8rem;
    padding-right: 40px;
  }

  & .channelMenu:hover {
    background: #f4f4f4;
  }

  & .channelMenu .channelUserIcon {
    float: right;
    margin-right: -35px;
    margin-top: 5px;
  }

  & .channelMenu .channelTitle {
    display: block;
  }

  & .channelMenu .channelSetting {
    display: block;
    font-size: 0.6rem;
  }

  & .channelMenu .channelSetting .MuiSvgIcon-root {
    font-size: 0.8rem;
    margin-top: 1px;
    float: right;
    margin-left: 3px;
  }
`;

function UserMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  function closeMenu() {
    setAnchorEl(null);
  }

  return (
    <>
      <IconButton
        aria-label="Account of current user"
        aria-controls="primary-account-menu"
        aria-haspopup="true"
        onClick={e => setAnchorEl(e.target)}
        color="inherit"
        size="small"
        style={{ marginRight: 15 }}
      >
        <AccountCircle fontSize="large" />
      </IconButton>

      <StyledMenu
        anchorEl={anchorEl}
        id="primary-account-menu"
        keepMounted
        open={!!anchorEl}
        onClose={closeMenu}
      >
        <MenuItem onClick={closeMenu} className="channelMenu">
          <AccountCircle fontSize="large" className="channelUserIcon" />
          <b className="channelTitle">عنوان کانال</b>
          <div className="channelSetting">
            <SettingsIcon />
            تنظیمات کانال
          </div>
        </MenuItem>

        <MenuItem onClick={closeMenu}>
          <DashboardIcon />
          داشبرد
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          <MovieIcon />
          ویدیوهای من
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          <CommentIcon />
          دیدگاه ها
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          <FollowedChannelsIcon />
          کانال های دنبال شده
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          <ChartIcon />
          آمار بازدید
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          <LoguotIcon />
          خروج ازحساب کاربری
        </MenuItem>
      </StyledMenu>
    </>
  );
}

export default UserMenu;
