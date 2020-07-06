// Types
import { State } from "@typings";

// Constants
import {
  WINNERS,
  DATA_PREFIX,
  SETTINGS_PREFIX,
  SELECTED_OPTION,
  GAME_ON,
  GAME_SETTINGS,
  DIFFICULTY,
  GAME_PREFIX,
  FIELD_ITEMS,
  FIELDS_COUNT,
  STATISTIC,
  BTN_NAME,
  GAME_WINNER,
  WINNER,
  USERNAME,
} from "../constants";

// Utils
import { createSelector } from "reselect";

// Data selectors
export const dataState$ = (state: State) => state[DATA_PREFIX];
export const winners$ = createSelector(
  [dataState$],
  (dataState) => dataState[WINNERS]
);
export const gameSettings$ = createSelector(
  [dataState$],
  (dataState) => dataState[GAME_SETTINGS]
);

// Settings selectors
export const settingsState$ = (state: State) => state[SETTINGS_PREFIX];
export const selectedOption$ = createSelector(
  [settingsState$],
  (settingsState) => settingsState[SELECTED_OPTION]
);
export const difficulty$ = createSelector(
  [settingsState$],
  (settingsState) => settingsState[DIFFICULTY]
);
export const username$ = createSelector(
  [settingsState$],
  (settingsState) => settingsState[USERNAME]
);

// Game selectors
export const gameState$ = (state: State) => state[GAME_PREFIX];
export const gameOn$ = createSelector(
  [gameState$],
  (gameState) => gameState[GAME_ON]
);
export const fieldItems$ = createSelector(
  [gameState$],
  (gameState) => gameState[FIELD_ITEMS]
);
export const fieldsCount$ = createSelector(
  [gameState$],
  (gameState) => gameState[STATISTIC][FIELDS_COUNT]
);
export const playerFieldsCount$ = (state: State, player: string) =>
  state[GAME_PREFIX][STATISTIC][player];
export const btnName$ = createSelector(
  [gameState$],
  (gameState) => gameState[BTN_NAME]
);
export const gameWinner$ = createSelector(
  [gameState$],
  (gameState) => gameState[GAME_WINNER]
);
export const fieldByIndex$ = (state: State, index: number) =>
  state[GAME_PREFIX][FIELD_ITEMS][index][WINNER];
