import React, { useState, useEffect, useCallback } from 'react';
import { AppBar, Avatar, Badge, Button, Grid, Hidden, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import useStyles from './style'
import MailIcon from '@material-ui/icons/Mail'
import SideBar from './SideBar';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux'

import { setAuth } from '../../actions/auth'

import * as actionType from '../../constants/actionTypes';
import decode from 'jwt-decode';

const NavBar = ({ _id, avatar }) => {
    const isSetterAuth = Boolean(_id.length > 0)

    const dispatch = useDispatch()
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const logout = useCallback(() => {
        dispatch({ type: actionType.LOGOUT })
        history.replace('/')
    }, [dispatch, history])

    const token = JSON.parse(localStorage.getItem('profile'))?.token || null
    useEffect(() => {
        token && Boolean(decode(token).exp * 1000 < new Date().getTime()) && logout()
    }, [dispatch, token, location, logout])

    //start new app state (refresh page)
    token && !isSetterAuth && dispatch(setAuth(decode(token)))

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
            <MenuItem component={Link} to='/profile' onClick={handleViewProfile}>Profile</MenuItem>
            <MenuItem onClick={() => { handleCloseMenu(); logout() }}>Logout</MenuItem>
        </Menu>
    )

    return (
        <AppBar position="static" className={classes.navBar}>
            <Toolbar>
                <Grid container>
                    {isSetterAuth && (
                        <Hidden mdUp>
                            <Grid item className={classes.gridItem}>
                                <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
                                    <MenuIcon />
                                </IconButton>
                                <SideBar logout={logout} orientation='left' items={['HOME', 'FIND PEOPLE', 'SET INTEREST', 'PROFILE', 'LOGOUT']} open={sidebarOpen} toggleDrawer={toggleDrawer} />
                            </Grid>
                        </Hidden>

                    )}
                    <Grid item className={classes.gridItem}>
                        <Typography className={classes.heading} variant="h5" component={Link} to="/" color="inherit">Date App</Typography>
                    </Grid>
                    <Grid item className={classes.menuContent} lg={11} sm={9}>
                        {!isSetterAuth ? (
                            <Button color="inherit" component={Link} to="/login">Login</Button>
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
                                            <Avatar alt="user" src={avatar} />
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

const stateToProps = state => ({ ...state.auth })

export default connect(stateToProps)(NavBar);