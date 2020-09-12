/**
 *
 * SidebarDrawer
 *
 */

import React, { memo } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { Home as HomeIcon } from '@material-ui/icons';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectDrawerIsOpen } from 'containers/App/selectors';
import { drawerToggleAction } from 'containers/App/actions';
import Logo from 'components/Logo';
import DrawerButton from 'layouts/DashboardLayout/DrawerButton';

const StyledDrawer = styled(Drawer)`
  & .MuiPaper-root {
    padding: 0 15px;
    min-width: 195px;
  }

  & .marginFromSide {
    margin-right: 15px;
  }

  & .MuiList-root {
    border-bottom: 1px solid #e5e5e5;
    min-width: 150px;
  }

  & .topLogoItem {
    margin-bottom: 15px;
    padding: 4px 0;
  }

  & .MuiListItemIcon-root {
    min-width: 25px;
    color: #6f7285;
  }

  & .MuiListItemText-root {
    text-align: right;
    color: #6f7285;
  }

  & .MuiListItem-button {
    padding: 2px;
    transition: background-color 350ms ease;
  }

  & .MuiListItem-button:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

function SidebarDrawer({ drawrIsOpen, toggleSidebar }) {
  return (
    <StyledDrawer
      className="sidebarDrawer"
      anchor="left"
      open={drawrIsOpen}
      onClose={() => toggleSidebar(false)}
    >
      <List>
        <ListItem className="topLogoItem">
          <DrawerButton />
          <Logo size="small" className="marginFromSide" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="خانه" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="منوی دوم" />
        </ListItem>
      </List>
    </StyledDrawer>
  );
}

SidebarDrawer.propTypes = {
  drawrIsOpen: PropTypes.bool,
  toggleSidebar: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  drawrIsOpen: makeSelectDrawerIsOpen(),
});

function mapDispatchToProps(dispatch) {
  return {
    toggleSidebar: show => dispatch(drawerToggleAction(show)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  memo,
  withConnect,
)(SidebarDrawer);
