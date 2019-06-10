import { all, call } from "redux-saga/effects";
import board from "./board";
import user from "./user";

export default function* rootSaga() {
  yield all([call(board), call(user)]);
}
