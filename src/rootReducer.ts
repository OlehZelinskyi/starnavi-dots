import { combineReducers } from "redux";
import { dataReducer, settingsReducer, gameReducer } from "./redux/reducers";

export default combineReducers({ dataReducer, settingsReducer, gameReducer });
