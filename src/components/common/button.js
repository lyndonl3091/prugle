import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

const button = (props) => (

  <Link to={props.route}>
    <Button label={props.label} />
  </Link>

)

export default button;
