import React, { useState } from 'react'
import { AppBar, Tabs, Tab, useTheme } from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views'
import TabPanel from './TabPanel'
import Hobbies from './Hobbies'

const Panel = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const theme = useTheme()

    const handleChangeBar = (event, newValue) => {
        setTabIndex(newValue);
    }

    const handleChangeIndex = (index) => {
        setTabIndex(index);
    }
    return (
        <>
            <AppBar position="static" color="default">
                <Tabs value={tabIndex} onChange={handleChangeBar} indicatorColor="primary" textColor="primary" variant="fullWidth">
                    <Tab label="Posts" />
                    <Tab label="Hobbies" />
                </Tabs>
            </AppBar>
            <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={tabIndex} onChangeIndex={handleChangeIndex}>
                <TabPanel value={tabIndex} index={0} dir={theme.direction}>
                    <h1>Hello</h1>
                </TabPanel>
                <TabPanel value={tabIndex} index={1} dir={theme.direction}>
                    <Hobbies />
                </TabPanel>
            </SwipeableViews>
        </>
    );
}

export default Panel;