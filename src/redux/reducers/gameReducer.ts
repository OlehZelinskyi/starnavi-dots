// Actions
import { AnyAction } from "redux";

// Constants
import {
  START_GAME,
  GAME_ON,
  SET_DIFFICULTY,
  FIELD_ITEMS,
  FIELD_WINNER,
  ACTIVATE,
  STATISTIC,
  FINISH_GAME,
  GAME_WINNER,
  BTN_NAME,
  RESET_STATE,
} from "../constants";

// Types
import { State } from "../../typings";

const initialState: State = {
  [GAME_ON]: false,
  [FIELD_ITEMS]: null,
  [STATISTIC]: null,
  [GAME_WINNER]: null,
  [BTN_NAME]: "play",
};

export default (state = initialState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case START_GAME:
      return {
        ...state,
        [GAME_ON]: true,
      };
    case FINISH_GAME:
      return {
        ...state,
        [GAME_ON]: false,
        [GAME_WINNER]: payload,
        [BTN_NAME]: "play again",
      };
    case SET_DIFFICULTY:
      const { field } = payload;
      return {
        ...state,
        [FIELD_ITEMS]: getFieldItems(field as number),
        [STATISTIC]: {
          fieldsCount: field ** 2,
          computer: 0,
          user: 0,
        },
      };
    case FIELD_WINNER:
      const { fieldIndex, fieldWinner } = payload;
      return {
        ...state,
        [FIELD_ITEMS]: {
          ...state[FIELD_ITEMS],
          [fieldIndex]: {
            ...state[FIELD_ITEMS][fieldIndex],
            clickable: false,
            state: {
              pending: false,
              color: fieldWinner === "computer" ? "red" : "green",
            },
            winner: fieldWinner,
          },
        },
        [STATISTIC]: {
          ...state[STATISTIC],
          [fieldWinner]: state[STATISTIC][fieldWinner] + 1,
        },
      };
    case ACTIVATE:
      const { index } = payload;
      return {
        ...state,
        [FIELD_ITEMS]: {
          ...state[FIELD_ITEMS],
          [index]: {
            ...state[FIELD_ITEMS][index],
            clickable: true,
            state: {
              pending: true,
              color: "blue",
            },
          },
        },
      };
    case RESET_STATE:
      return {
        ...state,
        [GAME_WINNER]: null,
        [FIELD_ITEMS]: getFieldItems(payload as number),
        [STATISTIC]: {
          fieldsCount: payload ** 2,
          computer: 0,
          user: 0,
        },
      };

    default:
      return state;
  }
};

function getFieldItems(field: number) {
  let fieldItems = {};

  for (let i = 0; i < field ** 2; i++) {
    fieldItems = {
      ...fieldItems,
      [i]: {
        key: i,
        clickable: false,
        state: {
          pending: false,
          color: "transparent",
        },
        winner: null,
        index: i,
      },
    };
  }

  return fieldItems;
}
