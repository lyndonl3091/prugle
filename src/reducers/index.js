import { combineReducers } from 'redux'

import deals from './deals_reducer'

const rootReducer = combineReducers({
    deals
})

export default rootReducer