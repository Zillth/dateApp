import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Icon from './Icon'
import Input from '../Inputs/Input'

import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles'
import { Grow } from '@material-ui/core'

import { signIn, signUp } from '../../actions/auth'
import { GoogleLogin } from 'react-google-login'


const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }

const Auth = () => {
    const [form, setForm] = useState(initialState)
    const [isSignup, setIsSignup] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()
    const classes = useStyles()

    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = () => setShowPassword(!showPassword)

    const switchMode = () => {
        setForm(initialState)
        setIsSignup((prevIsSignup) => !prevIsSignup)
        setShowPassword(false)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isSignup) {
            dispatch(signUp(form, history))
        } else {
            dispatch(signIn(form, history))
        }
    };

    const googleSuccess = (res) => {
        const googleObj = res?.profileObj
        try {
            dispatch(signIn({ googleObj }, history))
        } catch (error) {
            console.log(error)
        }
    }

    const googleError = (e) => { if (e.error !== "popup_closed_by_user") alert('Google Sign In was unsuccessful. Try again later') }

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    return (
        <Container component="main" maxWidth="xs">
            <Grow in timeout={500}>
                <Paper className={classes.paper} elevation={5}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">{isSignup ? 'Sign up' : 'Sign in'}</Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            {isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                </>
                            )}
                            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                            {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}

                        </Grid>
                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                            {isSignup ? 'Sign Up' : 'Sign In'}
                        </Button>
                        <GoogleLogin
                            clientId="435050867593-glspajaq01tcriipmeqsrlj7au6aube0.apps.googleusercontent.com"
                            render={(renderProps) => (
                                <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                                    Google Sign In
                                </Button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleError}
                            cookiePolicy="single_host_origin"
                        />
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Button onClick={switchMode}>
                                    {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Grow>

        </Container>
    );
}

export default Auth;