import React, { Component, Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { TextField, RaisedButton } from '@material-ui/core'
import { addDeal } from 'actions'


const mapDispatchToProps = dispatch => ({
    addDealActon: deal => dispatch(addDeal.try(deal))
})

export const AddDeal = props => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [link, setLink] = useState('')

    function handleSubmit() {
        const { addDealAction } = props
        addDealAction({
           title,
           description,
           link
        })
    }

    function inputTitle(e) {
        const val = e.target.value
        setTitle(val)
    }

    function inputDescription(e) {
        const val = e.target.value
        setDescription(val)
    }

    function inputLink(e) {
        const val = e.target.value
        setLink(val)
    }

    return (
        <>
        <form onSubmit={handleSubmit}>

            <TextField
                label="Title"
                onChange={inputTitle}
            />
            <br/>
            <TextField
                label="Description"
                onChange={inputDescription}
            />
            <br/>
            <TextField
                label="Link"
                onChange={inputLink}
            />
            <br/>
        </form>
    </>
    )
}

export default connect(
    null,
    mapDispatchToProps
)(AddDeal)