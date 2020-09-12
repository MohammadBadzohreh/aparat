/**
 *
 * ErrorBox
 *
 */

import React, { memo, useState } from 'react';
import { Close as CloseIcon } from '@material-ui/icons';
import PropTypes from 'prop-types';
import styled from 'styled-components';
const ErrorBoxWrapper = styled.div`
  background: #f98c8c;
  color: #292727;
  padding: 19px 23px;
  margin: 16px 15px;
  font-size: 1rem;
  position: relative;
  & .closeIcon {
    position: absolute;
    top: 1em;
    left: 1em;
    cursor: pointer;
  }
`;

const STATUSES = {
  404: 'ایتم مورد نظر یافت نشد.',
};
function renderError(error, forceMessge, options = null) {
  if (forceMessge) {
    return forceMessge;
  }
  if (
    error.response &&
    error.response.status &&
    STATUSES[error.response.status]
  ) {
    if (options && options[error.response.status])
      return options[error.response.status];

    return STATUSES[error.response.status];
  }
  return 'خطایی در سرور رخ داده  است.';
}

function ErrorBox({ error, options, forceMessge }) {
  const [showError, setShowError] = useState(true);
  return showError ? (
    <ErrorBoxWrapper>
      {renderError(error, forceMessge, options)}
      <CloseIcon className="closeIcon" onClick={() => setShowError(false)} />
    </ErrorBoxWrapper>
  ) : null;
}

ErrorBox.propTypes = {
  error: PropTypes.object.isRequired,
  options: PropTypes.object,
  forceMessge: PropTypes.string,
};

export default memo(ErrorBox);
