import React, { Component, Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { TextField, Button } from '@material-ui/core'
import { addDeal } from 'actions'
import useForm from 'react-hook-form'


const mapDispatchToProps = dispatch => ({
    addDealAction: deal => dispatch(addDeal.try(deal))
})


export const AddDeal = ({ addDealAction }) => {
    const { register, handleSubmit, watch, errors } = useForm()
    
    const onSubmit = data => {
        if (addDealAction) {
            debugger
            addDealAction(data)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* <input name="title" defaultValue="" ref={register} /> */}
            <TextField
                label="Title"
                inputProps={{
                    name: 'title',
                    defaultValue: "",
                    ref: register
                }}
            />
            <TextField
                label="Description"
                inputProps={{
                    name: 'description',
                    defaultValue: "",
                    ref: register
                }}
            />
            <TextField
                label="Link/URL"
                inputProps={{
                    name: 'link',
                    defaultValue: "",
                    ref: register
                }}
            />
            {/* <input name="description" defaultValue="" ref={register} />
            <input name="link" defaultValue="" ref={register} /> */}

            <Button type="submit">Submit</Button>
        </form>
    )
}

export default connect(
    null,
    mapDispatchToProps,
    null
)(AddDeal)