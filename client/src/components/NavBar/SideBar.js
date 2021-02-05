import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import clsx from 'clsx';
import useStyles from './style'
import { Link } from 'react-router-dom';

const SideBar = ({ items, open, toggleDrawer, orientation, logout }) => {
    const classes = useStyles()

    const list = (orientation, items) => (
        <div role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)} className={clsx(classes.list, {
            [classes.fullList]: orientation === 'top' || orientation === 'bottom',
        })}>
            <List>
                {items.map(item => (
                    <ListItem button key={item}>
                        {item === 'PROFILE' ? (
                            <ListItemText component={Link} to='/profile' primary={item} />
                        ) : item === 'LOGOUT' ? (
                            <div onClick={logout} style={{display: 'flex'}}>
                                <ListItemIcon>
                                    <ExitToAppIcon />
                                </ListItemIcon>
                                <ListItemText primary={item} />
                            </div>
                        ) : (
                                    <ListItemText primary={item} />
                                )}
                    </ListItem>
                ))}
            </List>
        </div>
    )

    return (
        <Drawer anchor={orientation} open={open} onClose={toggleDrawer(false)}>
            {list(orientation, items)}
        </Drawer>
    );
}

export default SideBar;