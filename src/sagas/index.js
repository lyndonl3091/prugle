import {
    call,
    fork, 
    take
} from 'redux-saga/effects'
import * as api from 'api'

import * as TYPES from 'types'

export function* addDealsListener() {
    console.log('test')
    const action = yield take(TYPES.ADD_DEALS.TRY)

    // yield fork(addDealsProcess)
}

// export function* addDealsProcess(action) {
//     // call api
// }

export default function*() {
    yield fork(addDealsListener)
}