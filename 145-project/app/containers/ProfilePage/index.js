/**
 *
 * ProfilePage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import DashboardLayout from 'layouts/DashboardLayout';

export function ProfilePage() {
  return (
    <div>
      <Helmet>
        <title>ProfilePage</title>
        <meta name="description" content="Description of ProfilePage" />
      </Helmet>
      <DashboardLayout>
        profile page
      </DashboardLayout>
    </div>
  );
}

// ProfilePage.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(ProfilePage);
