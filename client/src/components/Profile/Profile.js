import React, { useState } from 'react'
import { Grow, Grid, Avatar, Card, Container, Typography, AppBar, Tabs, Tab, useTheme } from '@material-ui/core'
import useStyles from './styles'
import SwipeableViews from 'react-swipeable-views'
import TabPanel from './TabPanel'

const UserConfig = () => {
    const classes = useStyles()
    const [tabIndex, setTabIndex] = useState(0)
    const theme = useTheme()

    const handleChangeBar = (event, newValue) => {
        setTabIndex(newValue);
    }

    const handleChangeIndex = (index) => {
        setTabIndex(index);
    }

    return (
        <Grow in timeout={500}>
            <Container>
                <Card elevation={12}>
                    <Grid container alignItems="center">
                        <Grid item xs={12} className={classes.bannerContainer}>
                            <img src="https://i.pinimg.com/originals/2c/c4/56/2cc456e2aad19112252bc886362a7d58.jpg" alt="banner" className={classes.banner} />
                            <Avatar alt="Personal" src="https://randomuser.me/api/portraits/men/75.jpg" className={classes.avatar} />
                        </Grid>
                        <Grid item xs={12} sm={4} className={classes.info}>
                            <Typography variant="h4">silverswan131</Typography>
                            <Typography>Brad Gibson</Typography>
                            <Typography>From Waterford</Typography>
                            <Typography>17 years old</Typography>
                            <Typography>Phone: 011-962-7516</Typography>
                            <Typography>Male</Typography>
                            <Typography>Heterosexual</Typography>
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <AppBar position="static" color="default">
                                <Tabs value={tabIndex} onChange={handleChangeBar} indicatorColor="primary" textColor="primary" variant="fullWidth">
                                        <Tab label="Posts" />
                                        <Tab label="Preferences" />
                                </Tabs>
                            </AppBar>
                            <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={tabIndex} onChangeIndex={handleChangeIndex}>
                                    <TabPanel value={tabIndex} index={0} dir={theme.direction}>
                                        <h1>Hello</h1>
                                    </TabPanel>
                                    <TabPanel value={tabIndex} index={1} dir={theme.direction}>
                                        <h1>World</h1>
                                    </TabPanel>
                            </SwipeableViews>
                        </Grid>
                    </Grid>
                </Card>
            </Container>
        </Grow>

    )
}

export default UserConfig