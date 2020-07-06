import { takeEvery } from "redux-saga/effects";
import { FINISH_GAME } from "../constants";
import { AnyAction } from "redux";
import postData from "./postData";
import getFormattedDate from "../../utils/getFormattedDate";

export default function* watchFinishGame() {
  yield takeEvery(FINISH_GAME, handleFinishGame);
}

export function* handleFinishGame(action: AnyAction) {
  const { payload: winner } = action;

  yield postData("winners", {
    id: Math.random(),
    winner,
    date: getFormattedDate(),
  });
}
