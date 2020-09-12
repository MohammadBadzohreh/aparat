/**
 *
 * ShowFollowPage
 *
 */

import React, { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import DashboardLayout from 'layouts/DashboardLayout';
import {
  getFollowingsListAction,
  getFollowersListAction,
} from 'containers/App/actions';
import {
  makeSelectFollowingsList,
  makeSelectFollowersList,
} from 'containers/App/selectors';
import Filter, { filtersItem } from './Filter';
import FollowingsList from './FollowingsList';

export function ShowFollowPage({
  getFollowingsList,
  getFollowersList,
  followers,
  followings,
}) {
  const [item, setItem] = useState(filtersItem.following);

  useEffect(() => {
    getFollowingsList();
    getFollowersList();
  }, []);

  function getData() {
    if (item === filtersItem.followers) {
      return followers.data;
    }
    return followings.data;
  }

  return (
    <DashboardLayout>
      <Helmet>
        <title>follow</title>
        <meta name="description" content="Description of ShowFollowPage" />
      </Helmet>
      <Filter onFilterChange={setItem} value={item} />
      {getData() && <FollowingsList data={getData()} type={item} />}
    </DashboardLayout>
  );
}

ShowFollowPage.propTypes = {
  getFollowingsList: PropTypes.func.isRequired,
  getFollowersList: PropTypes.func.isRequired,
  followings: PropTypes.object,
  followers: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  followings: makeSelectFollowingsList(),
  followers: makeSelectFollowersList(),
});

function mapDispatchToProps(dispatch) {
  return {
    getFollowingsList: () => dispatch(getFollowingsListAction()),
    getFollowersList: () => dispatch(getFollowersListAction()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ShowFollowPage);
