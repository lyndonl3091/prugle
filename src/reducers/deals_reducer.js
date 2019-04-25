import * as types from '../actions/types'
import { setIn } from 'immutable'
import initialState from './initialState'


export default function(state = initialState, action) {
    switch(action.type) {
        case types.GET_DEALS.SUCCESS:
            let result = state
            // result = result.setIn(['deals'], fromJS(action.payload.deals))
            return result
        default:
        return state
    }
}   