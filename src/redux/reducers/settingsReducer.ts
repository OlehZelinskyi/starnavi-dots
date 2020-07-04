import { AnyAction } from "redux"

// Types
import { State } from "../../typings"
import { SET_SELECTED_OPTION, DEFAULT_OPTION, SET_USERNAME, START_GAME } from "../constants"

const initialState: State = {
    selectedOption: DEFAULT_OPTION,
    username: '',
    gameOn: false
}

export default (state = initialState, action: AnyAction) => {
    const { type, payload } = action
    switch (type) {
        case SET_SELECTED_OPTION:
            return {
                ...state,
                selectedOption: payload
            }
        case SET_USERNAME:
            return {
                ...state,
                username: payload
            }
        case START_GAME:
            return {
                ...state,
                gameOn: true
            }
        default: return state
    }
}