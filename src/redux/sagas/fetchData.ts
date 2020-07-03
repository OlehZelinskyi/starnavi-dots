import { call, put } from "redux-saga/effects";

// API Calls
import { fetchApi } from "../api";
import { receiveData } from "../actions";


export default function* fetchData(endPoint: string) {
    const response = yield call(fetchApi, endPoint)

    yield put(receiveData(endPoint, response))
}