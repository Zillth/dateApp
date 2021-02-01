import React, { useState } from 'react';
import { AppBar, Avatar, Badge, Button, Grid, Hidden, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import useStyles from './style'
import MailIcon from '@material-ui/icons/Mail'

const NavBar = () => {
    const classes = useStyles()
    const [user, setUser] = useState(null)
    const [anchorEl, setAnchorEl] = useState(null)

    const handleOpenMenu = (e) => setAnchorEl(e.currentTarget)
    const handleCloseMenu = () => setAnchorEl(null)
    const handleViewProfile = () => { handleCloseMenu() }

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id='profile-menu'
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}>
            <MenuItem onClick={handleViewProfile}>Profile</MenuItem>
            <MenuItem onClick={() => { handleCloseMenu(); setUser(false) }}>Logout</MenuItem>
        </Menu>
    )

    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container>
                    {user && (
                        <Hidden smUp>
                            <Grid item className={classes.gridItem}>
                                <IconButton edge="start" color="inherit">
                                    <MenuIcon />
                                </IconButton>
                            </Grid>
                        </Hidden>

                    )}
                    <Grid item className={classes.gridItem}>
                        <Typography variant="h5">
                            Date App
                        </Typography>
                    </Grid>
                    <Grid item className={classes.menuContent} lg={11} sm={9}>
                        {!user ? (
                            <Button color="inherit" onClick={() => setUser(true)}>Login</Button>
                        ) : (
                                <>
                                    <div className={classes.nav}>
                                        <IconButton edge="end" color="inherit" className={classes.navButton}>
                                            <Typography variant="body2">HOME</Typography>
                                        </IconButton>
                                        <IconButton edge="end" color="inherit" className={classes.navButton}>
                                            <Typography variant="body2">FIND PEOPLE</Typography>
                                        </IconButton>
                                        <IconButton edge="end" color="inherit" className={classes.navButton}>
                                            <Typography variant="body2">SET INTEREST</Typography>
                                        </IconButton>
                                    </div>

                                    <IconButton edge="end" color="inherit">
                                        <Badge color="secondary" badgeContent={4} className={classes.badge}>
                                            <MailIcon />
                                        </Badge>
                                    </IconButton>

                                    <IconButton edge="end" color="inherit" onClick={handleOpenMenu} className={classes.ToEnd}>
                                        <Avatar alt="user" src="https://randomuser.me/api/portraits/men/75.jpg" aria-controls="simple-menu" aria-haspopup="true" />
                                    </IconButton>
                                    {renderMenu}
                                </>
                            )}
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;