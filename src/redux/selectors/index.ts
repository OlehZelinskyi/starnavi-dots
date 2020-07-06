// Types
import { State } from "../../typings";

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
    STATISTIC
} from "../constants";

// Data selectors
export const winners$ = (state: State) => state[DATA_PREFIX][WINNERS];
export const gameSettings$ = (state: State) => state[DATA_PREFIX][GAME_SETTINGS];

// Settings selectors
export const selectedOption$ = (state: State) => state[SETTINGS_PREFIX][SELECTED_OPTION];
export const difficulty$ = (state: State) => state[SETTINGS_PREFIX][DIFFICULTY];

// Game selectors
export const gameOn$ = (state: State) => state[GAME_PREFIX][GAME_ON];
export const fieldItems$ = (state: State) => state[GAME_PREFIX][FIELD_ITEMS]
export const fieldsCount$ = (state: State) => state[GAME_PREFIX][STATISTIC][FIELDS_COUNT]
export const playerFieldsCount$ = (state: State, player: string) => state[GAME_PREFIX][STATISTIC][player]