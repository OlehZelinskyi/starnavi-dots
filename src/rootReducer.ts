import { combineReducers } from "redux";
import { dataReducer, settingsReducer } from "./redux/reducers";

export default combineReducers({ dataReducer, settingsReducer });