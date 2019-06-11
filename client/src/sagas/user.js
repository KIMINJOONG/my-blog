import { call, put, all, fork, takeLatest } from "redux-saga/effects";
import {
  USER_JOIN_REQUEST,
  USER_JOIN_SUCCESS,
  USER_JOIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAILURE,
  USER_LOGIN_SUCCESS
} from "../reducers/user";
import { userApi } from "../Api";

function* userLoginAPI(data) {
  const result = yield userApi.login(data);
  console.log(result);
  return result.data;
}
function* userLogin(action) {
  try {
    const result = yield call(userLoginAPI, action.data);
    yield put({
      type: USER_LOGIN_SUCCESS,
      isLogin: result
    });
  } catch (e) {
    yield put({
      type: USER_LOGIN_FAILURE
    });
  }
}
function* watchUserLogin() {
  yield takeLatest(USER_LOGIN_REQUEST, userLogin);
}
function* userJoinAPI(data) {
  const result = yield userApi.join(data);
  return result;
}
function* userJoin(action) {
  try {
    yield call(userJoinAPI, action.data);
    yield put({
      type: USER_JOIN_SUCCESS
    });
  } catch (e) {
    yield put({
      type: USER_JOIN_FAILURE
    });
  }
}
function* watchUserJoin() {
  yield takeLatest(USER_JOIN_REQUEST, userJoin);
}

export default function* userSaga() {
  yield all([fork(watchUserJoin), fork(watchUserLogin)]);
}
