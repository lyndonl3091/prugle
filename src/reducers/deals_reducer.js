import * as types from '../actions/types'

const initialState = []

export default function(state = initialState, action) {
    switch(action.type) {
        case types.GET_DEALS.SUCCESS:
            return {}
        default:
        return state
    }
}