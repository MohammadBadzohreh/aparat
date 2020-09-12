/**
 *
 * NavBar
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  AppBar,
  Toolbar,
  Grid,
  Button,
  useScrollTrigger,
} from '@material-ui/core';

import UserMenu from '../UserMenu';
import NotificationMenu from '../NotificationMenu';
import AddVideoMenu from '../AddVideoMenu';
import SearchBar from '../SearchBar';
import DrawerButton from '../DrawerButton';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { compose } from 'redux';

const StyledWrapper = styled.div`
  flexgrow: 1;
  color: #6f7285;
  position: relative;
  z-index: 1;

  & .MuiAppBar-root {
    background: #fff;
    box-shadow: 0 0 2px 1px #e4e0e0;
    color: #6f7285;
    min-height: 80px;
  }

  & .MuiSvgIcon-root {
    color: #9a9a9a;
  }

  & .MuiToolbar-root {
    justify-content: flex-end;
  }

  & .sectionDesktop {
    direction: ltr;
  }

  & .sectionDesktop .MuiSvgIcon-root {
    color: #6f7285;
  }

  & .leftItems,
  & .rightItems {
    max-width: auto;
  }

  & .searchBarWrapper {
    position: absolute;
    left: 0;
    right: 0;
    top: 30px;
  }

  @media (min-width: 600px) {
    & .searchBarWrapper {
      position: inherit;
    }

    & .MuiAppBar-root {
      min-height: auto;
    }

    & .leftItems,
    & .rightItems {
      max-width: 130px;
    }
  }
  & .navbarButton {
  }
`;

function NavBar({ redirectTo }) {
  return (
    <StyledWrapper>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Grid container spacing={3}>
            <Grid item xs className="leftItems">
              <DrawerButton />
            </Grid>
            <Grid item xs className="searchBarWrapper">
              <SearchBar />
            </Grid>
            <Grid item xs className="rightItems">
              <div className="sectionDesktop">
                <UserMenu />

                <NotificationMenu />

                <AddVideoMenu />
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </StyledWrapper>
  );
}

NavBar.propTypes = {
  redirectTo: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    redirectTo: url => dispatch(push(url)),
  };
}
const withStore = connect(
  undefined,
  mapDispatchToProps,
);
export default compose(
  memo,
  withStore,
)(NavBar);
