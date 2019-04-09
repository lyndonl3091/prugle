import React from 'react'
import Paper from '@material-ui/core/Paper'
import { toSignUp } from 'src/routePaths'

// import Button from '../common/Button';

const pageStyle = {
  height: '100%',
  width: '50%',
  margin: 'auto',
  textAlign: 'center',
  padding: '10px',
};

const SplashPage = (props) => (
  <div>
    <Paper style={pageStyle} zDepth={5}>
      <h4>Prugle</h4>
      <Button
        route={toSignUp}
        label="Sign Up/Log In"
      />
    </Paper>
  </div>
)

export default SplashPage;
