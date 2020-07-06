export interface Styles {
    [key: string]: React.CSSProperties
}

export interface Winner {
    id: number,
    winner: string,
    date: string
}

export interface State {
    [key: string]: any
}

export type Mode = 'easyMode' | 'normalMode' | 'hardMode'

export interface DifficultyItem {
    field: number,
    delay: number
}

export type Difficulty = {
    [key in Mode]: DifficultyItem
};

export interface Option {
    label: string,
    value: string
}

export interface FieldItemConfig {
    [i: number]: {
        key: number,
        clickable: boolean,
        state: {
            pending: boolean,
            color: string,
        },
        winner: null | string,
        index: number,
    }
}