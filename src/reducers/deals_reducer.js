import * as types from 'types'
import { fromJS, setIn } from 'immutable'
import initialState from './initialState'


export default function(state = initialState, { type, payload}) {
    switch(type) {
        case types.GET_DEALS.REQUEST:
            let result = state
            return result
        case types.GET_DEALS.FAILURE:
            let result = state
            return result
        case types.GET_DEALS.SUCCESS:
            let result = state
            const { deals } = payload
            result = result.setIn(['listOfDeals'], fromJS(deals))
            return result
        case types.ADD_
        default:
        return state
    }
}