// Effects
import { fork } from "redux-saga/effects";

// Sagas
import fetchData from "./redux/sagas/fetchData";

export default function* rootSaga() {
    yield fork(fetchData, 'winners');
}