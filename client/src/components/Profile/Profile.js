import React, { useState } from 'react'
import { Grow, Grid, Avatar, Card, Container } from '@material-ui/core'
import useStyles from './styles'
import Info from './Info'
import Panel from './Panel'
import EditIcon from '@material-ui/icons/Edit'
import DoneIcon from '@material-ui/icons/Done'
import FileBase from '../Inputs/FileBase'


//temporal
const initialInfo = { name: 'Brad Gibson', location: 'Waterford', age: '17', gender: 'Male', orientation: 'Men', avatar: 'https://randomuser.me/api/portraits/men/75.jpg', banner: 'https://i.pinimg.com/originals/2c/c4/56/2cc456e2aad19112252bc886362a7d58.jpg' }

const UserConfig = () => {
    const classes = useStyles()
    const [editable, setEditable] = useState(false)
    const [data, setData] = useState(initialInfo)

    const handleClick = () => setEditable(!editable)

    const handleChange = (e) => setData({...data, [e.target.name]: [e.target.value]})

    const handleKeyDown = (e) => e.keyCode === 13 && handleClick()

    return (
        <Grow in timeout={500}>
            <Container>
                <Card elevation={12}>
                    <Grid container alignItems="center">
                        <Grid item container xs={12} className={classes.bannerContainer}>
                            <FileBase onDone={({ base64 }) => setData({...data, banner: base64})} id="banner-selector" fileType={['image/jpeg', 'image/png']}>
                                <EditIcon color="primary" className={classes.pointer}/>
                            </FileBase>
                            <img src={data.banner} alt="banner" className={classes.banner} />
                            <Grid item className={classes.avatarContainer}>
                                <FileBase onDone={({ base64 }) => setData({...data, avatar: base64})} id="avatar-selector" fileType={['image/jpeg', 'image/png']}>
                                    <EditIcon color="primary" className={classes.pointer}/>
                                </FileBase>
                                <Avatar alt="Personal" src={data.avatar} className={classes.avatar} />
                            </Grid>

                        </Grid>
                        <Grid item container xs={12} sm={3} className={classes.info}>
                            {!editable ? (<EditIcon className={classes.editIcon} onClick={handleClick} color="primary" />) : (
                                <>
                                    <DoneIcon className={classes.editIcon} onClick={handleClick} color="primary" />
                                </>
                            )}
                            <Info editable={editable} data={data} handleChange={handleChange} handleKeyDown={handleKeyDown}/>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Panel />
                        </Grid>
                    </Grid>
                </Card>
            </Container>
        </Grow>

    )
}

export default UserConfig