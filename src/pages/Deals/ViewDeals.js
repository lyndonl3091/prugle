import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, TextField } from '@material-ui/core'

const mapStateToProps = state => {
    deals: state.deals
}

export class ViewDeals extends Component {

    componentDidMount() {
        // call api to get list of deals
    }

    render() {


        return (

            <div>List of Deals</div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ViewDeals)
