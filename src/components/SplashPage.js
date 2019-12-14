import React from 'react'
import Paper from '@material-ui/core/Paper'
import { toAdd, toSignUp, toDeals } from 'src/routePaths'
import {
  SplashWrapper,
  Header
} from 'styles/common'

import LinkButton from 'components/common/LinkButton'

const pageStyle = {
  height: '100%',
  width: '100%',
  margin: 'auto',
  textAlign: 'center',
  padding: '10px',
};

const SplashPage = props => (
  <SplashWrapper>
    <Paper style={pageStyle}>
      <h4>Prugle</h4>
      <LinkButton
        route={toDeals}
        // label="Sign Up/Log In"
        label="View Deals"
      />
      <LinkButton
        route={toAdd}
        // label="Sign Up/Log In"
        label="Add Deals"
      />
    </Paper>
  </SplashWrapper>
)

export default SplashPage;
