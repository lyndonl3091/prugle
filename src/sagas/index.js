import {
    call,
    fork, 
    take
} from 'redux-saga/effects'
import * as api from 'api'

import * as TYPES from 'types'

export function* getDealsListener() {
    while (true) {
        const action = yield take(TYPES.GET_DEALS.TRY)

        debugger

        const response = yield call(api.getDeals)
    }
}

export function* addDealsListener() {
    while (true) {
        const action = yield take(TYPES.ADD_DEALS.TRY)
    

        // yield fork(addDealsProcess)
    }

}

// export function* addDealsProcess(action) {
//     // call api
// }

export default function* rootSaga() {
    yield fork(getDealsListener)
    yield fork(addDealsListener)
}