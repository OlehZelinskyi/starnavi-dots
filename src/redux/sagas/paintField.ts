import { takeLatest, put } from "redux-saga/effects";
import { PAINT_FIELD } from "../constants";
import { AnyAction } from "redux";
import { winner } from "../actions";

export default function* watchPaintField() {
  yield takeLatest(PAINT_FIELD, handlePaintField);
}

export function* handlePaintField(action: AnyAction) {
  const { payload: index } = action;

  yield put(winner("user", index));
}
