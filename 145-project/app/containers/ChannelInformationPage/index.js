/**
 *
 * ChannelInformationPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import DashboardLayout from 'layouts/DashboardLayout';

export function ChannelInformationPage() {
  return (
    <div>
      <Helmet>
        <title>کانال من</title>
        <meta
          name="description"
          content="Description of ChannelInformationPage"
        />
      </Helmet>
      <DashboardLayout showSidebar={false}>
        my channel page

      </DashboardLayout>
    </div>
  );
}

ChannelInformationPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(ChannelInformationPage);
