import { combineReducers, createStore } from 'redux'
import {loadingReducer} from './loadingReducer'

const rootReducer = combineReducers({
    loading: loadingReducer,
})

export const store = createStore(rootReducer)

export type RootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store // for dev
