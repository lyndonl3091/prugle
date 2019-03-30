import * as types from './types'
import { signUp } from '../api/authApi'

export const signUpUser = (user) => {
  return function(dispatch) {
    signUp(user)
      .then(response => {
        // sign user in
      })
      .catch(() => {

      })
  }
}


export const signInUser = ({ email, password }) => {
  return function(dispatch) {
    signIn(user)
      .then(res => {
        dispatch({ type: types.AUTH_USER})
        // save JWT token to localStorage
        localStorage.setItem('token', res.data.token);
        // redirect to home route
      })
      .catch((error) => {
        dispatch(authError(error));
      });
  }
}

export function authError(error) {
  return {
    type: type.AUTH_ERROR,
    payload: error
  }
}
