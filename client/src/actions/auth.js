import { AUTH, SET_AUTH } from '../constants/actionTypes'
import * as api from '../api/index'

export const signIn = (formData, router) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData)
        dispatch({ type: AUTH, data })
        router.replace('/')
    } catch (error) {
        error && alert('User not found')
    }
}

export const signUp = (formData, router) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData)
        dispatch({ type: AUTH, data })
        router.replace('/')
    } catch (error) {
        console.log(error)
    }
}

export const setAuth = token => async dispatch => {
    try {
        const { data } = await api.findUser(token.id)
        dispatch({ type: SET_AUTH, data })
    } catch (error) {
        console.log(error)
    }
}
/*
export const getUser = (id, googleId) => async (dispatch) => {
    try {
        const { data } = await api.findUser({ id, googleId })
        dispatch({ type: SET_USER, data: data })
    } catch (error) {
        console.log(error)
    }
}*/