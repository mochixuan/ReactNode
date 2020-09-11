const initialState = {
    name: 'mochixuan'
}

function allReducer(state, action){
    switch(action.type) {
        case 'reset':
            return Object.assign({}, state, {name: action.data});
        default:
            return state;
    }
}