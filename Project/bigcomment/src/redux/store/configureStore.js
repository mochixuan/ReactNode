import {createStore,applyMiddleware,compose} from 'redux'
import {reducers} from '../reducers'

const middleWares = []
const enhances = [applyMiddleware(...middleWares)]

export const configureStore = (initialState) => {
    let composeEnhancers = compose
    if (process.env.NODE_ENV !== 'production') {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    }
    const store = createStore(reducers,initialState, composeEnhancers(...enhances))
    return store
}


