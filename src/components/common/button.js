import React from 'react'
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/core/RaisedButton'

const Button = (props) => (

  <Link to={props.route}>
    <RaisedButton label={props.label} />
  </Link>

)

export default Button;
