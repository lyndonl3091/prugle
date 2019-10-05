import React, { Component, Fragment, useState } from 'react'
import { TextField, RaisedButton } from '@material-ui/core'
import { addDeal } from 'actions'


export const AddDeal = props => {
    const [title, setTitle] = useState('')
    const [descriptio, setDescription] = useState('')
    const [link, setLink] = useState('')

    function handleSubmit() {
        console.log('submit')
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

export default AddDeal