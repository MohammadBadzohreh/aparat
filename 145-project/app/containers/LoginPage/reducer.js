/*
 *
 * LoginPage reducer
 *
 */
import produce from 'immer';
import {
  LOGIN_ACTION,
  LOGIN_SUCCESS_ACTION,
  LOGIN_FAIL_ACTION,
  LOGIN_REINIT,
} from './constants';

export const initialState = {
  username: null,
  password: null,
  user: null,
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const loginPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN_REINIT:
        draft.error = null;
        draft.user = null;
        break;
      case LOGIN_ACTION:
        draft.username = action.username;
        draft.password = action.password;
        draft.error = null;
        draft.user = null;
        break;
      case LOGIN_SUCCESS_ACTION:
        draft.user = action.user;
        draft.username = null;
        draft.password = null;
        draft.error = null;
        break;
      case LOGIN_FAIL_ACTION:
        draft.error = action.error;
        draft.user = null;
        draft.password = null;
        draft.username = null;
        break;
    }
  });

export default loginPageReducer;
