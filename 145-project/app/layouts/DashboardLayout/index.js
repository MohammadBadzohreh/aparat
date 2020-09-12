/**
 *
 * DashboardLayout
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import {
  getTagsAction,
  getCategoriesAction,
  getPlaylistAction,
} from 'containers/App/actions';
import { compose } from 'redux';

import NavBar from './NavBar';
import SidebarDrawer from './SidebarDrawer';
import Sidebar from './Sidebar';

const StyledDashboardWrapper = styled.div`
  background: #fefefe;
  color: #6f7285;

  & .sidebarWrapper {
    z-index: 0;
    padding-bottom: 0px !important;
  }

  & .contentWrapper {
    padding: 15px;
    flex: 1;
  }
`;

function DashboardLayout({
  children,
  showSidebar,
  getTags,
  getCategories,
  getPlaylist,
}) {
  useEffect(() => {
    getTags();
    getCategories();
    getPlaylist();
  }, []);
  return (
    <StyledDashboardWrapper>
      <NavBar />
      <SidebarDrawer />

      <Grid container wrap="nowrap">
        {showSidebar && (
          <Grid item className="sidebarWrapper">
            <Sidebar />
          </Grid>
        )}
        <Grid item className="contentWrapper">
          {children}
        </Grid>
      </Grid>
    </StyledDashboardWrapper>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
  showSidebar: PropTypes.bool,
  getTags: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  getPlaylist: PropTypes.func.isRequired,
};

DashboardLayout.defaultProps = {
  showSidebar: true,
};

function mapDispatchToProps(dispatch) {
  return {
    getTags: () => dispatch(getTagsAction()),
    getCategories: () => dispatch(getCategoriesAction()),
    getPlaylist: () => dispatch(getPlaylistAction()),
  };
}

const wihtStore = connect(
  undefined,
  mapDispatchToProps,
);

export default compose(
  wihtStore,
  memo,
)(DashboardLayout);
