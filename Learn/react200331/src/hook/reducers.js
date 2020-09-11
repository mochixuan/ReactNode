const initialState = {
    home: {
        title: '请登入'
    },
    user: {
        name: null,
        age: null,
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'login':
            const newState = {...state};
            newState.user = {...action.data};
            return newState;
        default:
            return state;
    }
}

export {
    reducer,
    initialState
}