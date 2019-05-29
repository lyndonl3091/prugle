import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'


const AppBar = () => (
    <div>
        <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
        </AppBar>
    </div>
)