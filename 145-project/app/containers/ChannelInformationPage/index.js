/**
 *
 * ChannelInformationPage
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import DashboardLayout from 'layouts/DashboardLayout';
import {makeSelectChannelInformation} from "containers/App/selectors";

import {getChannelInformationAction,getChannelInformationClearAction} from "containers/App/actions";
import LoadingWithText from 'components/LodingWithText';
import ErrorBox from 'components/ErrorBox';
import ChannelBanner from './ChannelBanner';
import ChannelInfoBar from './ChannelInfoBar';
import ChannelDetailInfo from './ChannelDetailInfo';

export function ChannelInformationPage({channelInformation,getChannelInformation,clearChannelInformation}) {
  useEffect(()=>{
    // todo change this point
    getChannelInformation("user1");
    return clearChannelInformation;
  },[]);

  return (
    <div>
      <Helmet>
        <title>کانال من</title>
        <meta
          name="channel"
          content="Description of ChannelInformationPage"
        />
      </Helmet>
      <DashboardLayout showSidebar={false}>
        {
          channelInformation.name && <LoadingWithText />
        }

        {
          channelInformation.data && (
            <>
            <ChannelBanner src="https://static.cdn.asset.aparat.com/avt/26683909-7794-b__8084.jpg" />
            <ChannelInfoBar data={channelInformation.data} />
            <ChannelDetailInfo data={channelInformation.data} />
            </>
          )
        }

        {
          channelInformation.error && <ErrorBox error={{}} forceMessge="در بارگزاری اطلاعات خطای به وجود آمده است" />
        }



      </DashboardLayout>
    </div>
  );
}

ChannelInformationPage.propTypes = {
  getChannelInformation:PropTypes.func.isRequired,
  clearChannelInformation:PropTypes.func.isRequired,
  channelInformation:PropTypes.object,

};

const mapStateToProps = createStructuredSelector({
  channelInformation: makeSelectChannelInformation(),
  });

function mapDispatchToProps(dispatch) {
  return {
    getChannelInformation: (name) =>dispatch(getChannelInformationAction(name)),
    clearChannelInformation: () =>dispatch(getChannelInformationClearAction()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect,memo)(ChannelInformationPage);
