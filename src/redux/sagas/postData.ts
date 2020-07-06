// Effects
import { call } from "redux-saga/effects";

// API Calls
import { postApi } from "../api";

// Actions
import fetchData from "./fetchData";

// Types
import { Winner } from "../../typings";

export default function* postData(endPoint: string, data: Winner) {
  yield call(postApi, endPoint, data);
  yield fetchData("winners");
}
