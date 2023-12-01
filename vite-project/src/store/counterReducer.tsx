type InitialState = typeof initialState
type InclementCountActionType = ReturnType<typeof incrementCountAC>
type ResetCountActionType = ReturnType<typeof resetCountAC>
type SetCounterActionType = ReturnType<typeof setCounterAC>

type ActionType = InclementCountActionType | ResetCountActionType | SetCounterActionType

const initialState = {
    count: 0,
}
export const counterReducer = (state = initialState, action: ActionType): InitialState => {
    switch (action.type) {
        case 'INCREMENT': {
            return {...state, count: state.count + 1}
        }
        case "RESET": {
            return {...state, count: action.startValue}
        }
        case "COUNTER": {
            return {...state, count: action.value}
        }
        default: return state
    }
}

export const incrementCountAC = () => {
    return {type: 'INCREMENT'} as const
}

export const resetCountAC = (startValue: number) => {
    return {type: 'RESET', startValue} as const
}

export const setCounterAC = (value: number) => {
    return {type: 'COUNTER', value} as const
}