import React,{useReducer} from 'react'
import {Children1} from './children1'
import {Children2} from './children2'
import { GlobalContext} from './store'

import { reducer, initialState} from './reducers'

function Hook() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <GlobalContext.Provider value={{ state, dispatch}}>
            <Children1 />
            <Children2 />
        </GlobalContext.Provider>
    )
}

export {Hook}