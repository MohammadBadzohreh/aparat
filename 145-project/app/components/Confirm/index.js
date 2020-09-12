import React, { memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
const DialogWrapper = styled(Dialog)`
  & .dialog_body {
    font-size: 1.3rem;
  }
`;
function Confirm({
  children,
  show,
  onCancel,
  onOk,
  cancelTitle,
  agreeTitle,
  dialogTitle,
}) {
  function handleChange() {
    onCancel();
    onOk();
  }
  return (
    <div>
      <DialogWrapper
        open={show}
        onClose={onCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText
            className="dialog_body"
            id="alert-dialog-description"
          >
            {children}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel} color="primary" variant="outlined">
            {cancelTitle}
          </Button>
          <Button
            onClick={handleChange}
            color="secondary"
            variant="contained"
            autoFocus
            style={{ marginRight: '4px' }}
          >
            {agreeTitle}
          </Button>
        </DialogActions>
      </DialogWrapper>
    </div>
  );
}
Confirm.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onOk: PropTypes.func.isRequired,
  cancelTitle: PropTypes.string,
  agreeTitle: PropTypes.string,
  dialogTitle: PropTypes.string.isRequired,
};
Confirm.defaultProps = {
  cancelTitle: 'انصراف',
  agreeTitle: 'تایید',
};
export default memo(Confirm);
