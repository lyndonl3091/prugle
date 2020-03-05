import { toPath } from 'lodash'

const types = ['TRY', 'SUCCESS', 'FAILURE']

export const createAsyncActions = type => {
    return {
        try: args => ({
            payload: { ...args },
            type: type.TRY
        }),
        success: args => ({
            payload: { ...args },
            type: type.SUCCESS
        }),
        failure: args => ({
            payload: { ...args },
            type: type.FAILIRE
        })
    }
}

export const createAsyncRequestTypes = val => {
	return types.reduce((acc, next) => {
    acc = { ...acc, [next]: `${val}.${next}` }
    return acc
  }, {})
}

export const getIn = (state, path) => {
    const x = toPath(path)

    return state.getIn(x)
}