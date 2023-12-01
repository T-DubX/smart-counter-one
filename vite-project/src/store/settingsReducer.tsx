export type SetMaxValueActionType = ReturnType<typeof setMaxValueAC>
export type SetStartValueActionType = ReturnType<typeof setStartValueAC>
export type SetErrorActionType = ReturnType<typeof setErrorAC>
export type SetDisabledActionType = ReturnType<typeof setDisableAC>

type ActionType = SetMaxValueActionType
    | SetStartValueActionType
    | SetDisabledActionType
    | SetErrorActionType

const initialState = {
    maxValue: 5,
    startValue: 0,
    error: false,
    disabled: false
}
type InitialState = typeof initialState

export const settingsReducer = (state: InitialState = initialState, action: ActionType): InitialState => {
    switch (action.type) {
        case "SET-MAX-VALUE": {
            return {...state, maxValue: action.value}
        }
        case "SET-START-VALUE": {
            return {...state, startValue: action.value}
        }
        case "SET-ERROR": {
            return {...state, error: action.value}
        }
        case "SET-DISABLED": {
            return {...state, disabled: action.value}
        }

        default:
            return state
    }
}

export const setMaxValueAC = (value: number) => {
    return {type: 'SET-MAX-VALUE', value} as const
}

export const setStartValueAC = (value: number) => {
    return {type: 'SET-START-VALUE', value} as const
}

export const setErrorAC = (value: boolean) => {
    return {type: 'SET-ERROR', value} as const
}

export const setDisableAC = (value: boolean) => {
    return {type: 'SET-DISABLED', value} as const
}