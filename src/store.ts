import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

// Saga
import rootSaga from './rootSaga';

// Reducer
import rootReducer from "./rootReducer";

// Types
import { State } from "./typings";

const sagaMiddleware = createSagaMiddleware();

const preloadedState: State = {
    dataReducer: {
        winners: null
    }
}

const store = createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga);

export default store

