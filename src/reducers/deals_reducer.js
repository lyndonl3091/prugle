import * as types from 'types'
import { fromJS, setIn } from 'immutable'
import initialState from './initialState'


export default function(state = initialState, { type, payload}) {
    switch(type) {
        case types.GET_DEALS.REQUEST:
            return state
        case types.GET_DEALS.FAILURE:
            return state            
        case types.GET_DEALS.SUCCESS:
            let result = state
            const { deals } = payload
            result = result.setIn(['listOfDeals'], fromJS(deals))
            return result
        case types.ADD_DEAL.SUCCESS:
            return state
            
        default:
        return state
    }
}