import { State } from "../../typings";
import { WINNERS, DATA_PREFIX, SETTINGS_PREFIX, SELECTED_OPTION, GAME_ON } from "../constants";

export const winners$ = (state: State) => state[DATA_PREFIX][WINNERS];
export const selectedOption$ = (state: State) => state[SETTINGS_PREFIX][SELECTED_OPTION];
export const gameOn$ = (state: State) => state[SETTINGS_PREFIX][GAME_ON];