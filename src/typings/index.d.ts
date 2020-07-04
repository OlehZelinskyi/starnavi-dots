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

export type Difficulty = {
    [key in Mode]: {
        field: number;
        delay: number
    };
};

export interface Option {
    label: string,
    value: string
}