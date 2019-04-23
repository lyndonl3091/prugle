import * as types from '../actions/types'
import { setIn } from 'immutable'



export default function(state, action) {
    switch(action.type) {
        case types.GET_DEALS.SUCCESS:
            let result = state
            result = setIn(result, )
        default:
        return state
    }
}