import React from 'react'
import Paper from '@material-ui/core/Paper'
import { toSignUp, toDeals } from 'src/routePaths'
import { SplashWrapper } from 'styles/common'

import LinkButton from 'components/common/LinkButton'

const pageStyle = {
  height: '100%',
  width: '50%',
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
    </Paper>
  </SplashWrapper>
)

export default SplashPage;
