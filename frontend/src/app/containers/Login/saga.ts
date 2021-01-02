import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { loginActions } from './slice';
import { client } from '../../../utils/request';
import { push } from 'connected-react-router';

export function* sendLoginRequest(action: any) {
  try {
    const { payload } = action;
    const resp = yield call(
      client.post,
      'http://localhost:3333/auth/login',
      payload,
    );
    yield put(loginActions.setAccessToken(resp.data.access_token));
    yield put(push('/'));
  } catch (e) {
    throw e;
  }
}

export function* loginSaga() {
  yield takeLatest(loginActions.postLogin, sendLoginRequest);
}
