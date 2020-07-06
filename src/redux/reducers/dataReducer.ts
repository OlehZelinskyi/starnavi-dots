// Types
import { State } from "../../typings";
import { AnyAction } from "redux";

// Constants
import { RECEIVE_DATA, WINNERS, GAME_SETTINGS } from "../constants";

const initialState: State = {
  [WINNERS]: null,
  [GAME_SETTINGS]: null,
};

export default (state = initialState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case RECEIVE_DATA:
      return {
        ...state,
        [payload.type]: payload.data,
      };

    default:
      return state;
  }
};
