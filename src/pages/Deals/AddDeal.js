import React, { Component, Fragment } from 'react'
import { TextField, RaisedButton } from '@material-ui/core'
import { addDeal } from 'actions'

export class AddDeal extends component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: '',
            link: ''
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
    inputDescription = e => {
        e.preventDefault()
        this.setState({
            description: e.target.value
        })
    }
    inputLink = e => {
        e.preventDefault()
        this.setState({
            link: e.target.value
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
            <TextField
                hintText="Description"
                floatingLabelText="Description"
                onChange={this.inputDescript}
            />
            <br/>
            <TextField
                hintText="Link"
                floatingLabelText="Link"
                onChange={this.inputLink}
            />
            <br/>
            </form>
        </Fragment>
    }
}