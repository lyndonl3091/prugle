import * as CONSTANTS from 'types'
import { fromJS, setIn } from 'immutable'
import initialState from './initialState'

const behaviors = {
    [CONSTANTS.GET_DEALS.REQUEST]: (state, payload) => {
        return state
    },
    [CONSTANTS.GET_DEALS.SUCCESS]: (state, payload) => {
        let result = state
        const { deals } = payload

        result = result.setIn(['listOfDeals'], fromJS(deals))
        
        return result
    }
}

export default function(state = initialState, { type, payload }) {
    return behaviors[type](state, payload)
}


// export default function(state = initialState, { type, payload }) {
//     switch(type) {
//         case types.GET_DEALS.REQUEST:
//             return state
//         case types.GET_DEALS.FAILURE:
//             return state            
//         case types.GET_DEALS.SUCCESS:
//             let result = state
//             const { deals } = payload
//             result = result.setIn(['listOfDeals'], fromJS(deals))
//             return result
//         case types.ADD_DEAL.SUCCESS:
//             return state
//         default:
//         return state
//     }
// }