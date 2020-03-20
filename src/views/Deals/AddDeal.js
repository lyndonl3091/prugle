import React, { useState } from 'react'
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


export const AddDeal = ({ addDealAction }) => {
    const [open, setOpen] = useState(false)

    const handleOpenModal = () => setOpen(true)

    const handleCloseModal = () => setOpen(false)

    // const { register, handleSubmit, watch, errors } = useForm({
    //     validationSchema: AddSchema
    // })
    
    // const onSubmit = data => {
    //     if (addDealAction) {
    //         if (data && data.title) {
    //             addDealAction(data)
    //         }
    //     }
    // }

    // return (
    //     <form onSubmit={handleSubmit(onSubmit)}>
    //         <ColumnFlexWrapper>
    //             <TextField
    //                 label="Title"
    //                 inputProps={{
    //                     name: 'title',
    //                     defaultValue: "",
    //                     ref: register
    //                 }}
    //             />
    //             <TextField
    //                 label="Description"
    //                 inputProps={{
    //                     name: 'description',
    //                     defaultValue: "",
    //                     ref: register
    //                 }}
    //             />
    //             <TextField
    //                 label="Link/URL"
    //                 inputProps={{
    //                     name: 'link',
    //                     defaultValue: "",
    //                     ref: register
    //                 }}
    //             />
    //             <Button
    //                 type="submit"
    //                 variant="contained"
    //                 color="primary"
    //             >
    //                 Submit
    //             </Button>
    //         </ColumnFlexWrapper>
    //     </form>
    // )
}

export default connect(
    null,
    mapDispatchToProps,
    null
)(AddDeal)