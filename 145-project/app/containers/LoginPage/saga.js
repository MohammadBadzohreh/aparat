import { takeLatest, put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { setAuth } from 'utils/auth';

import { errorHappenAction } from 'containers/App/actions';
import { loginApi } from 'containers/App/APIs/login';

import { loginSuccessAction, loginFailAction } from './actions';
import { LOGIN_ACTION } from './constants';

function* loginToServer({ username, password }) {
  try {
    const response = yield call(loginApi, { username, password });
    setAuth(response.data);
    yield put(loginSuccessAction(response.data));
    yield put(push('/dashboard'));
  } catch (error) {
    if (error.response && error.response.status === 401) {
      yield put(loginFailAction(error.response));
    } else {
      yield put(errorHappenAction(error));
    }
  }
}

export default function* loginPageSaga() {
  yield takeLatest(LOGIN_ACTION, loginToServer);
}
