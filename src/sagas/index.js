import {
    call,
    fork, 
    take
} from 'redux-saga/effects'

import * as TYPES from 'types'

export function* addDealsListener() {
    console.log('test')
    const action = yield take(TYPES.ADD_DEALS.TRY)
}

export default function() {
    yield fork(addDealsListener)
}