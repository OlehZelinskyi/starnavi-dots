import { Winner, Option } from "../../typings";
import { RECEIVE_DATA, SET_SELECTED_OPTION, SET_USERNAME, START_GAME } from "../constants";

export const receiveData = (type: string, data: Winner[]) => ({
    type: RECEIVE_DATA, payload: {
        type: type,
        data: data
    }
})

export const setSelectedOption = (option: Option) => ({
    type: SET_SELECTED_OPTION,
    payload: option
})

export const setUsername = (username: string) => ({
    type: SET_USERNAME,
    payload: username
})

export const startGame = () => ({ type: START_GAME })