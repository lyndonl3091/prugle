// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'


import deals from './deals_reducer'


const rootReducer = combineReducers({
    deals
})

export default rootReducer