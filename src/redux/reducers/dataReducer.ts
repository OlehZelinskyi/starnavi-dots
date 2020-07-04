import { AnyAction } from "redux"

// Types
import { State } from "../../typings"
import { RECEIVE_DATA } from "../constants"

const initialState: State = {
    winners: null
}

export default (state = initialState, action: AnyAction) => {
    const { type, payload } = action
    switch (type) {
        case RECEIVE_DATA:
            return {
                ...state,
                [payload.type]: payload.data
            }


        default: return state
    }
}