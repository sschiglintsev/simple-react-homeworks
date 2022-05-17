const SET_LOADING = 'SET-LOADING'

export type InitialStateType = {
    loading: boolean
}

const initState: InitialStateType = {
    loading: false
}

export const loadingReducer = (state: InitialStateType = initState, action: loadingACType): InitialStateType => { // fix any
    switch (action.type) {
        case 'SET-LOADING': {
            return {...state, loading: action.loading}
        }
        default:
            return state
    }
}
type loadingACType = ReturnType<typeof loadingAC>

export const loadingAC = (loading: boolean) => {
    return {
        type: SET_LOADING,
        loading
    } as const
} // fix any