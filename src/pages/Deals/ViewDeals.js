import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { TextField } from '@material-ui/core'

import { Card } from 'components/common'

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
