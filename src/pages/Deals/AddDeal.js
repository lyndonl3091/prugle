import React, { Component, Fragment } from 'react'
import { TextField, RaisedButton } from '@material-ui/core'

export class AddDeal extends component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: ''
        }
    }
    
    handleSubmit = e => {
        e.preventDefault()
        // dispatch add
    }

    inputTitle = e => {
        e.preventDefault()
        this.setState({
            title: e.target.value
        })
    }

    render() {
        <Fragment>
            <form onSubmit={this.handleSubmit}>

            <TextField
                hintText="Title"
                floatingLabelText="Title"
                onChange={this.inputTitle}
            />
            <br/>
            </form>
        </Fragment>
    }
}