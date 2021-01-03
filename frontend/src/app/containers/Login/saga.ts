import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { loginActions } from './slice';
import { appActions } from '../App/slice';
import { apiEndpoint, client } from 'utils/request';
import { push } from 'connected-react-router';

export function* sendLoginRequest(action: any) {
  try {
    const { payload } = action;
    const resp = yield call(client.post, apiEndpoint('/auth/login'), payload);
    const token = resp.data.access_token;
    yield put(loginActions.setAccessToken(token));
    const userResp = yield call(client.get, apiEndpoint('/auth/profile'), {
      headers: { Authorization: `Bearer ${token}` },
    });
    yield put(appActions.setCurrentUser(userResp.data));
    yield put(push('/'));
  } catch (e) {
    yield put(appActions.setAppError(`Error : ${e.response.data.message}`));
  }
}

export function* loginSaga() {
  yield takeLatest(loginActions.postLogin, sendLoginRequest);
}
