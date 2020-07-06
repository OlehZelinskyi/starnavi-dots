// Effects
import { fork } from "redux-saga/effects";

// Sagas
import fetchData from "./redux/sagas/fetchData";
import { watchStartGame } from "./redux/sagas/startGame";
import watchPaintField from "./redux/sagas/paintField";
import watchFinishGame from "./redux/sagas/finishGame";

export default function* rootSaga() {
    yield fork(fetchData, 'winners');
    yield fork(fetchData, 'game-settings');
    yield fork(watchStartGame)
    yield fork(watchPaintField)
    yield fork(watchFinishGame)
}