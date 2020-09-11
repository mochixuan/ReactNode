import { applyMiddleware, compose, createStore } from 'redux'
import { persistStore } from 'redux-persist'
import { allReducers } from '../reducers'

const middleWares = [
    // logger,
    // crashReporter,
]

const enhances = [applyMiddleware(...middleWares)]

const configureStore = (initialState) => {
  const store = createStore(allReducers, initialState, compose(...enhances))
  persistStore(store) // 暂时磁盘保存数据
  return store
}

export { configureStore }
