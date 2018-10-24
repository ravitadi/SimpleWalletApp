import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core'

const content = {
  title: 'PayPal Wallet'
}

const NavBar = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                {content.title}
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default NavBar;
