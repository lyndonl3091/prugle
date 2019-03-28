import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'
import { TextField, RaisedButton } from 'material-ui'
import { string } from 'prop-types'

import { signUpUser } from '../../actions/authActions'

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: '',
      firstName: '',
      lastName: '',
    }
  };

  handleSubmit(e) {
    e.preventDefault();

    this.props.signUp(this.state);
  };

  inputUsername(username) {
    this.setState({ username })

  };

  inputPassword(password) {
    this.setState({ password });
  };

  inputEmail(email) {
    this.setState({ email });
  };

  inputFirstName(name) {
    this.setState({ name });
  };

  inputLastName(name) {
    this.setState({ name });
  };

  renderAlert() {
    if( this.props.errorMessage ) {
      // show snackbar error message
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>

          <TextField
            hintText="Username"
            floatingLabelText="Username"
            onChange={e => this.inputUsername(e.target.value)}
          /> <br/>

          <TextField
            hintText="Password"
            floatingLabelText="Password"
            type="password"
            onChange={e => this.inputPassword(e.target.value)}
          /><br/>

          <TextField
            hintText="Email"
            floatingLabelText="Email"
            type="text"
            onChange={e => this.inputEmail(e.target.value)}
          /><br/>

          <TextField
            hintText="First Name"
            floatingLabelText="First Name"
            type="text"
            onChange={e => this.inputFirstName(e.target.value)}
          /><br/>

          <TextField
            hintText="Last Name"
            floatingLabelText="Last Name"
            type="text"
            onChange={e => this.inputLastName(e.target.value)}
          /><br/>

          <RaisedButton
            type="Submit"
            label="Sign Up"
            primary
          />
        </form>
      </div>
    )
  }

};

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.error
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: user => dispatch(signUpUser(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUp));
