
export type InitialStateType = {
    loading: boolean
}

type LoadingAT = {
    type: 'LOADING',
    loading: boolean
}

const initState: InitialStateType = {
    loading: false
}



export const loadingReducer = (state: InitialStateType = initState, action: LoadingAT): InitialStateType => {
    switch (action.type) {
        case 'LOADING': {
            return {...state, loading: action.loading}
        }
        default: return state
    }
}

export const loadingAC = (loading: boolean): LoadingAT => ({ type: 'LOADING', loading})