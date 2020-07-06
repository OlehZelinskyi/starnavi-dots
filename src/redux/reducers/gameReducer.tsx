import React from "react";

// Actions
import { AnyAction } from "redux";

// Constants
import { START_GAME, GAME_ON, SET_DIFFICULTY, FIELD_ITEMS } from "../constants";

// Components
import FieldItem from "../../components/GameField/FieldItem";

// Types
import { State } from "../../typings";

const initialState: State = {
  [GAME_ON]: false,
  [FIELD_ITEMS]: null,
};

export default (state = initialState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case START_GAME:
      return {
        ...state,
        [GAME_ON]: true,
      };
    case SET_DIFFICULTY:
      const { field } = payload;
      return {
        ...state,
        [FIELD_ITEMS]: getFieldItems(field as number),
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
