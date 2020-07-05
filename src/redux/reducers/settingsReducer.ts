import { AnyAction } from "redux"

// Types
import { State } from "../../typings"

// Constants
import { SET_USERNAME, START_GAME, SET_DIFFICULTY, DIFFICULTY, USERNAME, GAME_ON } from "../constants"

const initialState: State = {
    [DIFFICULTY]: null,
    [USERNAME]: '',
    [GAME_ON]: false
}

export default (state = initialState, action: AnyAction) => {
    const { type, payload } = action
    switch (type) {
        case SET_DIFFICULTY:
            return {
                ...state,
                [DIFFICULTY]: payload
            }
        case SET_USERNAME:
            return {
                ...state,
                [USERNAME]: payload
            }
        case START_GAME:
            return {
                ...state,
                [GAME_ON]: true
            }
        default: return state
    }
}