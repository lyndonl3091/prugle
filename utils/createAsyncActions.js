const createAsyncActions = type => {
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


export default createAsyncActions