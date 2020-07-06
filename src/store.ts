import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

// Saga
import rootSaga from './rootSaga';

// Reducer
import rootReducer from "./rootReducer";

// Types
import { State } from "./typings";

// Constants
import { GAME_SETTINGS, WINNERS, DIFFICULTY, GAME_ON, USERNAME, FIELD_ITEMS } from "./redux/constants";

const sagaMiddleware = createSagaMiddleware();

const preloadedState: State = {
    dataReducer: {
        [WINNERS]: null,
        [GAME_SETTINGS]: null
    },
    settingsReducer: {
        [DIFFICULTY]: null,
        [USERNAME]: '',
    },
    gameReducer: {
        [GAME_ON]: false,
        [FIELD_ITEMS]: null
    }
}

const store = createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga);

export default store

