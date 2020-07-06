import { Winner, Difficulty, DifficultyItem } from "../../typings";
import { RECEIVE_DATA, SET_USERNAME, START_GAME, SET_DIFFICULTY, FIELD_WINNER, ACTIVATE, FINISH_GAME, RESET_STATE, PAINT_FIELD } from "../constants";

export const receiveData = (type: string, data: Winner[] | Difficulty) => ({
    type: RECEIVE_DATA, payload: {
        type: type,
        data: data
    }
})

export const setDifficulty = (difficulty: DifficultyItem) => ({
    type: SET_DIFFICULTY,
    payload: difficulty
})

export const setUsername = (username: string) => ({
    type: SET_USERNAME,
    payload: username
})

export const startGame = () => ({ type: START_GAME })

export const winner = (fieldWinner: string, fieldIndex: number) => ({
    type: FIELD_WINNER, payload: {
        fieldWinner,
        fieldIndex
    }
})

export const activate = (index: number) => ({
    type: ACTIVATE, payload: {
        index
    }
})

export const finishGame = (winner: string) => ({
    type: FINISH_GAME,
    payload: winner
})

export const resetState = (field: number) => ({
    type: RESET_STATE,
    payload: field
})

export const paintField = (index: number) => ({
    type: PAINT_FIELD,
    payload: index
})