import {persistCombineReducers,persistReducer} from 'redux-persist'
import storage from 'redux-persist/es/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import {user} from './user'

const userConfig = {
    key: 'user',
    storage,
    debug: false,
}

const routConfig = {
    key: 'root',
    storage,
    version: 1,
    stateReconciler: autoMergeLevel2, // 合并模式
    debug: false
}

const allReducers = persistCombineReducers(routConfig, {
    user: persistReducer(userConfig, user),
})

export { allReducers }
