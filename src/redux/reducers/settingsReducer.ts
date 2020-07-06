import { AnyAction } from "redux"

// Types
import { State } from "../../typings"

// Constants
import { SET_USERNAME, SET_DIFFICULTY, DIFFICULTY, USERNAME, STATISTIC } from "../constants"

const initialState: State = {
    [DIFFICULTY]: null,
    [USERNAME]: '',
}

export default (state = initialState, action: AnyAction) => {
    const { type, payload } = action
    switch (type) {
        case SET_DIFFICULTY:
            return {
                ...state,
                [DIFFICULTY]: payload,
            }
        case SET_USERNAME:
            return {
                ...state,
                [USERNAME]: payload
            }

        default: return state
    }
}