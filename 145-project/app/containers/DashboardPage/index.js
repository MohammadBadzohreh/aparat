/**
 *
 * DashboardPage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';

import DashboardLayout from 'layouts/DashboardLayout';

import makeSelectDashboardPage from './selectors';
import reducer from './reducer';

export function DashboardPage() {
  useInjectReducer({ key: 'dashboardPage', reducer });

  return (
    <div>
      <Helmet>
        <title>داشبورد</title>
        <meta name="description" content="صفحه داشبورد" />
      </Helmet>

      <DashboardLayout>
        <h1>داشبورد</h1>
      </DashboardLayout>
    </div>
  );
}

// DashboardPage.propTypes = {
//   // dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  dashboardPage: makeSelectDashboardPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(DashboardPage);
