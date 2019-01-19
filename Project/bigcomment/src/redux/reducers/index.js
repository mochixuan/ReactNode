import {combineReducers} from 'redux'
import {user} from './user'

const combine = {
    user
}

export const reducers = combineReducers(combine)
