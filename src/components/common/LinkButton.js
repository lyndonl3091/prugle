import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

const LinkButton = ({ label, route}) => (

  <Link to={route}>
    <Button>{label}</Button>
  </Link>

)

export default LinkButton;
