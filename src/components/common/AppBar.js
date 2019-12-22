import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import LinkButton from 'components/common/LinkButton'

import { toDeals, toHome } from 'src/routePaths'


const Bar = () => (
    <>
        <AppBar position="static">
        <Toolbar>
          <h1>Prugle</h1>
          {/* <IconButton edge="start" color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton> */}
          <LinkButton
            route={toHome}
            label="Home"
          />
          <LinkButton
            route={toDeals}
            label="Deals"
          />
          <Button color="inherit">Log In</Button>
        </Toolbar>
        </AppBar>
    </>
)

export default Bar