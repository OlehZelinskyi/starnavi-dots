// Effects
import { takeLatest, select, put, call } from 'redux-saga/effects'

// Constants
import { START_GAME } from '../constants'

// Selectors
import { difficulty$, fieldItems$, fieldsCount$, playerFieldsCount$ } from '../selectors'

// Actions
import { winner, activate, finishGame } from '../actions'

export function* watchStartGame() {
    yield takeLatest(START_GAME, handleStartGame)
}

export function* handleStartGame() {
    const { delay: delayTime } = yield select(difficulty$)
    const fieldItems = yield select(fieldItems$)
    const fieldsCount = yield select(fieldsCount$)


    // Generating fields order
    const fieldsOrder = Object
        .keys(fieldItems)
        .map(el => Number(el))
        .sort(() => Math.random() - 0.5)

    const delay = (time: number) => new Promise(resolve => setTimeout(resolve, time));

    const paintField = function* (index: number) {
        // Activating Field
        yield put(activate(index))
        // Delaying
        yield call(delay, delayTime)
        // Computer wins
        yield put(winner('computer', index))
    }

    for (const index of fieldsOrder) {
        const computerFieldsCount = yield select(playerFieldsCount$, 'computer')
        const userFieldsCount = yield select(playerFieldsCount$, 'user')

        if (userFieldsCount > fieldsCount / 2 || computerFieldsCount > fieldsCount / 2) {
            break;
        }
        yield paintField(index)
    }

    const computerFieldsCount = yield select(playerFieldsCount$, 'computer')
    const userFieldsCount = yield select(playerFieldsCount$, 'user')

    const gameWinner = userFieldsCount > computerFieldsCount ? 'user' : 'computer'
    yield put(finishGame(gameWinner))
}