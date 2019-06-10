import { call, put, all, fork, takeLatest } from "redux-saga/effects";
import {
  USER_JOIN_REQUEST,
  USER_JOIN_SUCCESS,
  USER_JOIN_FAILURE
} from "../reducers/user";
import { userApi } from "../Api";

function* userJoinAPI(data) {
  console.log("saga", data);
  const result = yield userApi.join(data);
  return result;
}
function* userJoin(action) {
  console.log("user join", action.data);
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
  console.log("watch");
  yield takeLatest(USER_JOIN_REQUEST, userJoin);
}

export default function* userSaga() {
  console.log("user saga");
  yield all([fork(watchUserJoin)]);
}
