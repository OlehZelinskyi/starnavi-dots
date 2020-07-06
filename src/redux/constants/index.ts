// Actions Constants
export const RECEIVE_DATA = 'RECEIVE_DATA'
export const SET_DIFFICULTY = 'SET_DIFFICULTY'
export const SET_USERNAME = 'SET_USERNAME'
export const START_GAME = 'START_GAME'

// URL
export const baseURL = 'https://starnavi-frontend-test-task.herokuapp.com'

// Prefixes
export const DATA_PREFIX = 'dataReducer'
export const SETTINGS_PREFIX = 'settingsReducer'
export const GAME_PREFIX = 'gameReducer'

// DataReducer properties
export const WINNERS = 'winners'
export const GAME_SETTINGS = 'game-settings'

// SettingsReducer properties
export const SELECTED_OPTION = 'selectedOption'
export const DIFFICULTY = 'difficulty'
export const USERNAME = 'username'

// GameReducer properties
export const GAME_ON = 'gameOn'
export const FIELD_ITEMS = 'fieldItems'

// Default values
export const DEFAULT_OPTION = {
    label: 'Easy Mode',
    value: 'easyMode'
}
