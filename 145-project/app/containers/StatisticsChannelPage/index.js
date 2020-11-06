/**
 *
 * StatisticsChannel
 *
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import DashboardLayout from 'layouts/DashboardLayout';
import { getChannelStatistics } from 'containers/App/actions';
import { createStructuredSelector } from 'reselect';
import { makeSelectChannelStatistics } from 'containers/App/selectors';
import Loading from 'components/Loading';
import LoadingWithText from 'components/LodingWithText';
import ErrorBox from 'components/ErrorBox';
import ChannelStatisticsCard from './ChannelStatisticsCard';
import ChannelStatisticsChart from './ChannelStatisticsChart';

export function StatisticsChannelpage({getChannelStatistics,channelStatistics}) {
  const [range,setRange] = useState(7);
  console.log(channelStatistics);
  useEffect(()=>{
    getChannelStatistics(range);
  },[range]);
  return (
    <div>
      <Helmet>
        <title>StatisticsChannel</title>
        <meta name="description" content="Description of StatisticsChannel" />
      </Helmet>
      <DashboardLayout>
      {channelStatistics.range && (
        <LoadingWithText />
      )}

      {
        channelStatistics.data &&
         (
           <>
         <ChannelStatisticsCard data={channelStatistics.data} />
         <ChannelStatisticsChart data = {channelStatistics.data.views} range={range} handleChange={setRange} />
         </>
          )
      }

      {
        channelStatistics.error && (
          <ErrorBox error={{
            response : "خطایی رخ داده است"
          }} forceMessge="خطایی در سرور رخ داده است." />
        )}

        
      </DashboardLayout>
      
    </div>
  );
}

StatisticsChannelpage.propTypes = {
  getChannelStatistics:PropTypes.func.isRequired,
  channelStatistics:PropTypes.object.isRequired,
};


const mapStateToProps = createStructuredSelector({
  channelStatistics : makeSelectChannelStatistics(),
})

function mapDispatchToProps(dispatch) {
  return {
    getChannelStatistics : (range) =>dispatch(getChannelStatistics(range))
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(StatisticsChannelpage);
