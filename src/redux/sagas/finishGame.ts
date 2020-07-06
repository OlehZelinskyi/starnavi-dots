// Effects
import { takeEvery } from "redux-saga/effects";

// Constants
import { FINISH_GAME } from "../constants";

// Types
import { AnyAction } from "redux";

// Sagas
import postData from "./postData";

// Utils
import { getFormattedDate } from "../../utils";

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
