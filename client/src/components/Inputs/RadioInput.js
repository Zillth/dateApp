import React, { useState } from 'react'

import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core'
import useStyles from './styles'

const RadioInput = ({ title, values }) => {
    const [value, setValue] = useState('female')
    const classes = useStyles()

    const handleChange = (event) => {
        setValue(event.target.value)
    }
    return (
        <FormControl component="fieldset" className={classes.radioInput}>
            <FormLabel component="legend">{title}</FormLabel>
            <RadioGroup aria-label={title} name="gender1" value={value} onChange={handleChange}>
                {values.map(({ value, disabled, label }) => (
                    <FormControlLabel value={value} control={<Radio />} label={label} disabled={disabled} />
                ))}
            </RadioGroup>
        </FormControl>
    )
}

export default RadioInput