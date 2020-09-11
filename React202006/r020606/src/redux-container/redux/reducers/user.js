import { USER_MODIFY_NAME_ACT } from "../action/actTypes";

const initialState = {
    name: 'mochixuan',
    age: 24,
}

export const user = (state = initialState, action) => {
    switch(action.type) {
        case USER_MODIFY_NAME_ACT:
            return Object.assign({}, state, {name: action.data})
        default:
            return state;
    }
}