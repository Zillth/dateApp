import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import clsx from 'clsx';
import useStyles from './style'

const SideBar = ({ items, open, toggleDrawer, orientation }) => {
    const classes = useStyles()

    const list = (orientation, items) => (
        <div role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)} className={clsx(classes.list, {
            [classes.fullList]: orientation === 'top' || orientation === 'bottom',
        })}>
            <List>
                {items.map(item => (
                    <ListItem button key={item}>
                        {item === 'LOGOUT' && (
                            <ListItemIcon>
                                <ExitToAppIcon />
                            </ListItemIcon>
                        )}
                        <ListItemText primary={item} />
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