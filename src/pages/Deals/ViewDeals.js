import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions'
// import { TextField } from '@material-ui/core'

import { Card } from 'components/common'

const mapStateToProps = state => ({
    deals: state.deals
})

const mapDispatchToProps = dispatch => {
    return {
        getDeals: () =>  dispatch(actions.getDeals.try())
    }
}

export class ViewDeals extends Component {

    componentDidMount() {
        // call api to get list of deals
        const { getDeals } = this.props
        getDeals()
    }

    render() {


        return (

            <div>List of Deals</div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ViewDeals)
