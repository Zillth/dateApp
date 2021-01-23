import * as actionType from '../constants/actionTypes'

const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case actionType.AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
            return { ...state, authData: action.data, loading: false, errorS: null }
        case actionType.LOGOUT:
            localStorage.clear()
            return {...state, authData: null, loading: false, errorS: null}
        default:
            return state
    }
}

export default authReducer