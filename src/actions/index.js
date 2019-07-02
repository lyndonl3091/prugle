import { createAsyncActions } from 'utils'

import * as TYPES from './types'

export const getDeals = createAsyncActions(TYPES.GET_DEALS)

export const addDeal = createAsyncActions(TYPES.ADD_DEAL)