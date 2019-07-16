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


const Bar = () => (
    <>
        <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Deals</Button>
          <Button color="inherit">Log In</Button>
        </Toolbar>
        </AppBar>
    </>
)

export default Bar