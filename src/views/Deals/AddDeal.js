import React, { Component, Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { TextField, RaisedButton } from '@material-ui/core'
import { addDeal } from 'actions'
import useForm from 'react-hook-form'


const mapDispatchToProps = dispatch => ({
    addDealAction: deal => dispatch(addDeal.try(deal))
})


export const AddDeal = ({ addDealAction }) => {
    const { register, handleSubmit, watch, errors } = useForm()
    
    const onSubmit = data => {
        if (addDealAction) {
            addDealAction(data)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="title" defaultValue="" ref={register} />
            <input name="description" defaultValue="" ref={register} />
            <input name="link" defaultValue="" ref={register} />

            <input type="submit" />
        </form>
    )
}

export default connect(
    null,
    mapDispatchToProps,
    null
)(AddDeal)