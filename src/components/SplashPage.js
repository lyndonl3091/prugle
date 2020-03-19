import React from 'react'
import Paper from '@material-ui/core/Paper'
import { toAdd, toSignUp, toDeals } from 'src/routePaths'
import {
  SplashWrapper,
  Header
} from 'styles/common'
import ViewDeals from 'views/Deals/ViewDeals'

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
      <LinkButton
        route={toAdd}
        label="Add Deals"
      />
      <ViewDeals />
    </Paper>
  </SplashWrapper>
)

export default SplashPage;
