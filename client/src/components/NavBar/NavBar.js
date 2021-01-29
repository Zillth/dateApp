import React from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const NavBar = () => {
    return (
        <AppBar>
            <Toolbar>
                <IconButton edge="start" color="inherit">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h5">
                    Date App
                </Typography>
                <Button color="inherit">
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;