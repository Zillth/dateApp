import * as actionType from '../constants/actionTypes'
import * as api from '../api'

export const auth = (state = { authData: null }, action) => {
    switch (action.type) {
        case actionType.AUTH:
            if(action?.data?.result) api.setUserInfoFromGoogle(action.data?.result)
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
            return { ...state, authData: action.data, loading: false, errors: null }
        case actionType.LOGOUT:
            localStorage.clear()
            return {...state, authData: null, loading: false, errors: null}
        default:
            return state
    }
}