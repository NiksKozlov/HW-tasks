import {ActionTypes, UserType} from '../HW8';

export const homeWorkReducer = (state: Array<UserType>, action: ActionTypes): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'SORT-NAME-UP': {
            return state.sort((a,b) => {
                return a.name > b.name ? 1 : -1;
            })
        }
        case 'SORT-NAME-DOWN': {
            return state.sort((a,b) => {
                return a.name < b.name ? 1 : -1
            })
        }
        case 'CHECK-AGE-18': {
            return state.filter(el => el.age >= 18)
        }
        default: return state
    }
}