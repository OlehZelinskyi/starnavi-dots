// Effects
import { fork } from "redux-saga/effects";

// Sagas
import { fetchData, watchFinishGame, watchPaintField, watchStartGame } from "./redux/sagas/";

export default function* rootSaga() {
  yield fork(fetchData, "winners");
  yield fork(fetchData, "game-settings");
  yield fork(watchStartGame);
  yield fork(watchPaintField);
  yield fork(watchFinishGame);
}
