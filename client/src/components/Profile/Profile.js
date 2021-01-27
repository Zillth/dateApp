import React from 'react'
import { Grow, Grid, Avatar, Card, Container } from '@material-ui/core'
import useStyles from './styles'
import Info from './Info'
import Panel from './Panel'

const UserConfig = () => {
    const classes = useStyles()

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
                            <Info />
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <Panel />
                        </Grid>
                    </Grid>
                </Card>
            </Container>
        </Grow>

    )
}

export default UserConfig