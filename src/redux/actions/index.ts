import { Winner, Difficulty, DifficultyItem } from "../../typings";
import { RECEIVE_DATA, SET_USERNAME, START_GAME, SET_DIFFICULTY } from "../constants";

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