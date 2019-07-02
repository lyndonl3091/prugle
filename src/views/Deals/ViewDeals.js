import React, { Component } from 'react'
import { connect } from 'react-redux'
import { get, getIn } from 'immutable'
import * as actions from 'actions'
// import { TextField } from '@material-ui/core'

import { Card } from 'components/common'

const mapStateToProps = state => ({
    deals: state.getIn(['deals', 'listOfDeals']) &&
        state.getIn(['deals', 'listOfDeals']).toJS() ?
        state.getIn(['deals', 'listOfDeals']).toJS() : []
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
        const { deals } = this.props

        const listOfDeals = deals && deals.length ? deals.map(deal => (
            <Card
                title={deal.title}
                description={deal.description}
            />
        )) : <div>No Deals</div>


        return (

            <div>
                <h2>Deals</h2>
                {listOfDeals}
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ViewDeals)