/**
 *
 * DashboardPage
 *
 */

import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';

import DashboardLayout from 'layouts/DashboardLayout';

import makeSelectDashboardPage from './selectors';
import reducer from './reducer';
import { makeSelectChannelStatistics } from 'containers/App/selectors';
import { getChannelStatistics } from 'containers/App/actions';
import ChannelStatisticsCard from 'containers/StatisticsChannelPage/ChannelStatisticsCard';
import LoadingWithText from 'components/LodingWithText';

export function DashboardPage({getChannelStat,statisticsChannel}) {
  useInjectReducer({ key: 'dashboardPage', reducer });

  const [range,setRange] = useState(7);

  useEffect(()=>{
    getChannelStat(range);
  },[]);

  return (
    <div>
      <Helmet>
        <title>داشبورد</title>
        <meta name="description" content="صفحه داشبورد" />
      </Helmet>

      <DashboardLayout>
      {statisticsChannel.range && (
        <LoadingWithText />
      )}

        {statisticsChannel.data && (
        <ChannelStatisticsCard data={statisticsChannel.data} />
        )}
      </DashboardLayout>
    </div>
  );
}

DashboardPage.propTypes = {
  statisticsChannel : PropTypes.object.isRequired,
  getChannelStat : PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dashboardPage: makeSelectDashboardPage(),
  statisticsChannel : makeSelectChannelStatistics(),
});

function mapDispatchToProps(dispatch) {
  return {
    getChannelStat : (range) => dispatch(getChannelStatistics(range)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(memo,withConnect)(DashboardPage);
