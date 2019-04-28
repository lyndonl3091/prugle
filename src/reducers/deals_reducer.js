import * as types from '../actions/types'
import { fromJS, setIn } from 'immutable'
import initialState from './initialState'


export default function(state = initialState, action) {
    switch(action.type) {
        case types.GET_DEALS.SUCCESS:
            let result = state
            const { deals } = action.payload
            result = result.setIn(['listOfDeals'], fromJS(deals))
            return result
        default:
        return state
    }
}   