/**
 *
 * AddVideoMenu
 *
 */

import React from 'react';
import { IconButton } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';

function AddVideoMenu() {
  return (
    <IconButton
      aria-label="Show 17 new notifications"
      color="inherit"
      size="small"
    >
      <AddIcon />
    </IconButton>
  );
}

export default AddVideoMenu;
