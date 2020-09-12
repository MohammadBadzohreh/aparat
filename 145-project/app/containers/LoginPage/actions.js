/*
 *
 * LoginPage actions
 *
 */

import {
  LOGIN_ACTION,
  LOGIN_SUCCESS_ACTION,
  LOGIN_FAIL_ACTION,
  LOGIN_REINIT,
} from './constants';

export function loginAction(username, password) {
  return {
    type: LOGIN_ACTION,
    username,
    password,
  };
}

export function loginSuccessAction(user) {
  return {
    type: LOGIN_SUCCESS_ACTION,
    user,
  };
}

export function loginFailAction(error) {
  return {
    type: LOGIN_FAIL_ACTION,
    error,
  };
}

export function loginReinitAction() {
  return {
    type: LOGIN_REINIT,
  };
}
