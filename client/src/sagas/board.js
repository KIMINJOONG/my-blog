import { call, put, takeEvery, all, fork } from "redux-saga/effects";

import {
  GET_BOARD_LIST_REQUEST,
  GET_BOARD_LIST_SUCCESS,
  GET_BOARD_LIST_FAILURE
} from "../reducers/board";

import { boardApi } from "../Api";

function* getBoardAPI() {
  const result = yield boardApi.getList();
  return result;
}

function* getBoardList() {
  try {
    const result = yield call(getBoardAPI);
    yield put({
      type: GET_BOARD_LIST_SUCCESS,
      payload: result
    });
  } catch (e) {
    yield put({
      type: GET_BOARD_LIST_FAILURE
    });
  }
}

function* watchGetBoardList() {
  yield takeEvery(GET_BOARD_LIST_REQUEST, getBoardList);
}
export default function* boardSaga() {
  yield all([fork(watchGetBoardList)]);
}
