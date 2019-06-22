import { call, put, all, fork, takeLatest } from "redux-saga/effects";
import {
  USER_JOIN_REQUEST,
  USER_JOIN_SUCCESS,
  USER_JOIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_FAULURE,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_REQUEST,
  LOAD_USER_DETAIL_REQUEST,
  LOAD_USER_DETAIL_SUCCESS,
  LOAD_USER_DETAIL_FAILURE
} from "../reducers/user";
import { userApi } from "../Api";

function* userLogoutAPI(){
  const result = yield userApi.logout();
  return result;
}

function* userLogout() {
  try{
    const result = yield call(userLogoutAPI);
    yield put({
      type: USER_LOGOUT_SUCCESS,
      data: result.data
    });
  }catch(e){
    yield put({
      type: USER_LOGOUT_FAULURE,
    });
  }
}

function* watchUserLogout(){
  yield takeLatest(USER_LOGOUT_REQUEST, userLogout);
}

function* userLoginAPI(data) {
  const result = yield userApi.login(data);
  return result.data;
}
function* userLogin(action) {
  try {
    const result = yield call(userLoginAPI, action.data);
    yield put({
      type: USER_LOGIN_SUCCESS,
      data: result.data
    });
  } catch (e) {
    yield put({
      type: USER_LOGIN_FAILURE,
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
    const result = yield call(userJoinAPI, action.data);
    yield put({
      type: USER_JOIN_SUCCESS,
      result: result.data
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

function* loadUserAPI() {
  const result = yield userApi.loadUser();
  return result;
}
function* loadUser() {
  try {
    const result = yield call(loadUserAPI);
    yield put({
      type: LOAD_USER_DETAIL_SUCCESS,
      data: result.data
    });
  } catch (e) {
    yield put({
      type: LOAD_USER_DETAIL_FAILURE
    });
  }
}
function* watchLoadUser() {
  yield takeLatest(LOAD_USER_DETAIL_REQUEST, loadUser);
}

export default function* userSaga() {
  yield all([
    fork(watchUserJoin), 
    fork(watchUserLogin), 
    fork(watchUserLogout),
    fork(watchLoadUser)
  ]);
}
