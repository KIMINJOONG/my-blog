import {
  call,
  put,
  takeEvery,
  all,
  fork,
  takeLatest
} from "redux-saga/effects";

import {
  GET_BOARD_LIST_REQUEST,
  GET_BOARD_LIST_SUCCESS,
  GET_BOARD_LIST_FAILURE,
  GET_BOARD_DETAIL_REQUEST,
  GET_BOARD_DETAIL_SUCCESS,
  GET_BOARD_DETAIL_FAILURE,
  BOARD_DELETE_SUCCESS,
  BOARD_DELETE_FAILURE,
  BOARD_DELETE_REQUEST,
  BOARD_UPDATE_FAILURE,
  BOARD_UPDATE_SUCCESS,
  BOARD_UPDATE_REQUEST,
  BOARD_UPLOAD_REQUEST,
  BOARD_UPLOAD_SUCCESS,
  BOARD_UPLOAD_FAILURE,
  SEARCH_BOARD_SUCCESS,
  SEARCH_BOARD_FAILURE,
  SEARCH_BOARD_REQUEST,
  UPLOAD_IMAGES_REQUEST,
  UPLOAD_IMAGES_FAILURE,
  UPLOAD_IMAGES_SUCCESS
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
      data: result.data
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

function* getBoardDetailAPI(id) {
  const result = yield boardApi.getDetail(id);
  return result;
}
function* getBoardDetail(action) {
  try {
    const result = yield call(getBoardDetailAPI, action.id);
    yield put({
      type: GET_BOARD_DETAIL_SUCCESS,
      data: result.data
    });
  } catch (e) {
    yield put({
      type: GET_BOARD_DETAIL_FAILURE
    });
  }
}

function* watchGetBoardDetail() {
  yield takeEvery(GET_BOARD_DETAIL_REQUEST, getBoardDetail);
}

function* boardDeleteAPI(id) {
  const result = yield boardApi.delete(id);
  return result;
}

function* boardDelete(action) {
  try {
    const result = yield call(boardDeleteAPI, action.id);
    yield put({
      type: BOARD_DELETE_SUCCESS,
      data: result.data
    });
  } catch (e) {
    yield put({
      type: BOARD_DELETE_FAILURE,
      error: e
    });
  }
}

function* watchBoardDelete() {
  yield takeLatest(BOARD_DELETE_REQUEST, boardDelete);
}

function* boardUpdateAPI(data) {
  const result = yield boardApi.update(data);
  return result;
}

function* boardUpdate(action) {
  try {
    yield call(boardUpdateAPI, action.data);
    yield put({
      type: BOARD_UPDATE_SUCCESS
    });
  } catch (e) {
    yield put({
      type: BOARD_UPDATE_FAILURE,
      error: e
    });
  }
}

function* watchBoardUpdate() {
  yield takeLatest(BOARD_UPDATE_REQUEST, boardUpdate);
}

function* boardUploadAPI(data) {
  const result = yield boardApi.upload(data);
  return result;
}

function* boardUpload(action) {
  yield call(boardUploadAPI, action.data);
  try {
    yield put({
      type: BOARD_UPLOAD_SUCCESS
    });
  } catch (e) {
    yield put({
      type: BOARD_UPLOAD_FAILURE,
      error: e
    });
  }
}

function* watchBoardUpload() {
  yield takeLatest(BOARD_UPLOAD_REQUEST, boardUpload);
}



function searchBoardAPI(searchTerm) {
  const result =  boardApi.search(searchTerm);
  return result;
}

function* searchBoard(action) {
  const result = yield call(searchBoardAPI, action.data);
  try {
    yield put({
      type: SEARCH_BOARD_SUCCESS,
      data: result.data
    });
  } catch (e) {
    yield put({
      type: SEARCH_BOARD_FAILURE,
      error: e
    });
  }
}
function* watchSearchBoard() {
  yield takeLatest(SEARCH_BOARD_REQUEST, searchBoard);
}

function uploadImagesAPI(formData) {
  const result = boardApi.uploadImages(formData);
  console.log(result);
  return result;
}

function* uploadImages(action) {
  yield call(uploadImagesAPI, action.data);
  try {
    yield put({
      type: UPLOAD_IMAGES_SUCCESS
    });
  } catch (e) {
    yield put({
      type: UPLOAD_IMAGES_FAILURE,
      error: e
    });
  }
}

function* watchUploadImages() {
  yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
}


export default function* boardSaga() {
  yield all([
    fork(watchGetBoardList),
    fork(watchGetBoardDetail),
    fork(watchBoardDelete),
    fork(watchBoardUpdate),
    fork(watchBoardUpload),
    fork(watchSearchBoard),
    fork(watchUploadImages)
  ]);
}
