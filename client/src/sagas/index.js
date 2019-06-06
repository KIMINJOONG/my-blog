import { all, call } from "redux-saga/effects";
import board from "./board";

export default function* rootSaga() {
  yield all([call(board)]);
}
