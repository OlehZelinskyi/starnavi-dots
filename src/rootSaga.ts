// Effects
import { fork } from "redux-saga/effects";

// Sagas
import fetchData from "./redux/sagas/fetchData";
import { watchStartGame } from "./redux/sagas/startGame";

export default function* rootSaga() {
    yield fork(fetchData, 'winners');
    yield fork(fetchData, 'game-settings');
    yield fork(watchStartGame)
}