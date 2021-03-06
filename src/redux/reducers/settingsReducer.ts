// Types
import { State } from "@typings";
import { AnyAction } from "redux";

// Constants
import {
  SET_USERNAME,
  SET_DIFFICULTY,
  DIFFICULTY,
  USERNAME,
} from "../constants";

const initialState: State = {
  [DIFFICULTY]: null,
  [USERNAME]: "",
};

export default (state = initialState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case SET_DIFFICULTY:
      return {
        ...state,
        [DIFFICULTY]: payload,
      };
    case SET_USERNAME:
      return {
        ...state,
        [USERNAME]: payload,
      };

    default:
      return state;
  }
};
