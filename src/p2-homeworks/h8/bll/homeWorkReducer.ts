import {UserType} from '../HW8';


type SortUpAT = {
    type: 'SORT-NAME-UP'
    payload: 'up'
}
type SortDownAT = {
    type: 'SORT-NAME-DOWN'
    payload: 'down'
}
type CheckAgeAT = {
    type: 'CHECK-AGE-18'
    payload: number
}

export type ActionTypes = SortUpAT | SortDownAT | CheckAgeAT

export const homeWorkReducer = (state: Array<UserType>, action: ActionTypes): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'SORT-NAME-UP': {
            return [...state].sort((a,b) => {
                return a.name > b.name ? 1 : -1;
            })
        }
        case 'SORT-NAME-DOWN': {
            return [...state].sort((a,b) => {
                return a.name < b.name ? 1 : -1
            })
        }
        case 'CHECK-AGE-18': {
            return state.filter(el => el.age >= action.payload)
        }
        default: return state
    }
}