import {
    call,
    fork, 
    take,
    put
} from 'redux-saga/effects'
import * as api from 'api'
import * as actions from 'actions'
import * as TYPES from 'types'

export function* getDealsListener() {
    while (true) {
        const action = yield take(TYPES.GET_DEALS.TRY)

        const response = yield call(api.getDeals)

        if (response && response.status && response.status === 200) {
            const { data } = response
            yield put(actions.getDeals.success({ deals: data }))
        } 
    }
}

export function* addDealsListener() {
    while (true) {
        const action = yield take(TYPES.ADD_DEAL.TRY)
    

        yield fork(addDealsProcess, action)
    }

}

export function* addDealsProcess(action) {
    
    const { response, error } = yield call(api.addDeal, {...action.payload})

    if (response) {
        debugger
        // notify deal has been added
    } else {
        // notify error
    }

}

export default function* rootSaga() {
    yield fork(getDealsListener)
    yield fork(addDealsListener)
}