import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import Input from '../Inputs/Input'
import useStyles from './styles'


const Info = ({ editable, handleChange, data, handleKeyDown}) => {
    const classes = useStyles()
    
    return (
        <>
            <Grid item xs={12} className={classes.input}>
                {editable ? (<Input name="name" label={"Name"} value={data.name} handleChange={handleChange} handleKeyDown={handleKeyDown} autoFocus/>) :
                    (<Typography variant="h6">{data.name}</Typography>)}
            </Grid>
            <Grid item xs={12} className={classes.input}>
                {editable ? (<Input name="location" label={"Location"} value={data.location} handleKeyDown={handleKeyDown} handleChange={handleChange} />) :
                    (<Typography variant="body2">From: {data.location}</Typography>)}
            </Grid>
            <Grid item xs={12} className={classes.input}>
                {editable ? (<Input name="age" label={"Age"} type="number" value={data.age} handleKeyDown={handleKeyDown} handleChange={handleChange} />) :
                    (<Typography variant="body2">{data.age} years old</Typography>)}
            </Grid>
            <Grid item xs={12} className={classes.input}>
                {editable ? (<Input name="gender" label={"Gender"} value={data.gender} handleKeyDown={handleKeyDown} handleChange={handleChange} />) :
                    (<Typography variant="body2">gender: {data.gender}</Typography>)}
            </Grid>
            <Grid item xs={12} className={classes.input}>
                {editable ? (<Input name="orientation" label={"Orientation"} value={data.orientation} handleKeyDown={handleKeyDown} handleChange={handleChange} />) :
                    (<Typography variant="body2">likes: {data.orientation}</Typography>)}
            </Grid>
        </>
    );
}

export default Info;