import React from 'react'
import { connect } from 'react-redux'
import { TextField, Button } from '@material-ui/core'
import { addDeal } from 'actions'
import useForm from 'react-hook-form'
import * as yup from 'yup'

import {
    ColumnFlexWrapper
} from 'styles/common'

const mapDispatchToProps = dispatch => ({
    addDealAction: deal => dispatch(addDeal.try(deal))
})    

const AddSchema = yup.object().shape({
    title: yup.string().required()
})    


export const AddDealForm = ({ onSubmit }) => (
    <form onSubmit={onSubmit}
)