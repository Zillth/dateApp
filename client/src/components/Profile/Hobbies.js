import React, { useState } from 'react';
import { Button, Chip, Grid, Typography } from '@material-ui/core'
import useStyles from './styles'
import Input from '../Inputs/Input'

// Temporal
const initialHobbies = [
    'football', 'bassquetball', 'volleyball', 'read books', 'taekwondo', 'martial arts'
]

const Hobbies = () => {
    const classes = useStyles()
    const [cancelable, setCancelable] = useState(false)
    const [form, setForm] = useState({ "description": 'I am a good person xD', "hobbies": initialHobbies, "hobbie": '' })

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const handleKeyDown = (e) => e.target.name === "description" ? e.keyCode === 13 && setCancelable(!cancelable) : e.keyCode === 13 && handleAdd()

    const handleAdd = () => {
        !form.hobbies.find(hobbie => hobbie === form.hobbie) ? setForm({...form, hobbies: [...form.hobbies, form.hobbie.toLowerCase()], hobbie: ''}) : setForm({...form, hobbie: ''})
        
        document.getElementsByName("hobbie")[0].focus()
    }
    return (
        <>
            {!cancelable ? (
                <Typography className={classes.description} variant="body1">{form.description}</Typography>
            ) : (
                    <Grid container className={classes.description}>
                        <Input name="description" label="description" handleChange={handleChange} handleKeyDown={handleKeyDown} autoFocus type="text" value={form.description} />
                    </Grid>
                )}

            {form.hobbies.map(hobbie => (
                <Chip key={hobbie} label={hobbie} className={classes.chip} onDelete={cancelable ? () => setForm({...form, hobbies: form.hobbies.filter(oldHobbie => oldHobbie !== hobbie)}) : null} />
            ))}
            {!cancelable ? (
                <Button color="primary" className={classes.button} onClick={() => setCancelable(!cancelable)}>Edit</Button>
            ) : (
                    <>
                        <Grid container className={classes.input}>
                            <Input name="hobbie" label="Hobbie" autoComplete="off" half handleChange={handleChange} value={form.hobbie} handleKeyDown={handleKeyDown}/>
                            <Grid item>
                                <Button color="primary" onClick={handleAdd}>Add</Button>
                            </Grid>
                        </Grid>
                        <Button color="primary" fullWidth className={classes.button} onClick={() => setCancelable(!cancelable)}>Accept</Button>
                    </>
                )}

        </>
    );
}

export default Hobbies;