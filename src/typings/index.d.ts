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