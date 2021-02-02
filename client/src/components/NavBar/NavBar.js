import React, { useState } from 'react';
import { AppBar, Avatar, Badge, Button, Grid, Hidden, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import useStyles from './style'
import MailIcon from '@material-ui/icons/Mail'
import SideBar from './SideBar';

const NavBar = () => {
    const classes = useStyles()
    const [user, setUser] = useState(null)
    const [anchorEl, setAnchorEl] = useState(null)
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const handleOpenMenu = (e) => setAnchorEl(e.currentTarget)
    const handleCloseMenu = () => setAnchorEl(null)
    const handleViewProfile = () => { handleCloseMenu() }
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setSidebarOpen(open)
    }

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
        <AppBar position="static" className={classes.navBar}>
            <Toolbar>
                <Grid container>
                    {user && (
                        <Hidden mdUp>
                            <Grid item className={classes.gridItem}>
                                <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
                                    <MenuIcon />
                                </IconButton>
                                <SideBar orientation='left' items={['HOME', 'FIND PEOPLE', 'SET INTEREST', 'PROFILE', 'LOGOUT']} open={sidebarOpen} toggleDrawer={toggleDrawer} />
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
                                    <Hidden smDown>
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
                                    </Hidden>
                                    <IconButton edge="end" color="inherit">
                                        <Badge color="secondary" badgeContent={4} className={classes.badge}>
                                            <MailIcon />
                                        </Badge>
                                    </IconButton>
                                    <Hidden smDown>
                                        <IconButton edge="end" color="inherit" onClick={handleOpenMenu} className={classes.ToEnd} aria-controls="simple-menu">
                                            <Avatar alt="user" src="https://randomuser.me/api/portraits/men/75.jpg" />
                                        </IconButton>
                                        {renderMenu}
                                    </Hidden>
                                </>
                            )}
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;