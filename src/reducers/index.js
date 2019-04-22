// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'


import deals from './deals_reducer'

const initialState = Immutable.Map()

const rootReducer = combineReducers({
    deals
})

export default rootReducer