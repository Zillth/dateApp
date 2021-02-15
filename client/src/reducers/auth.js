import * as actionType from '../constants/actionTypes'

const initialState = {
    _id: '',
    name: '',
    email: '',
    hobbies: [],
    description: '',
    avatar: ''
}

export const auth = (state = initialState, action) => {
    let { _id, name, email, hobbies, description, avatar } = action.data?.user || initialState
    switch (action.type) {
        case actionType.AUTH:
            localStorage.setItem('profile', JSON.stringify({ token: action?.data?.token }))
            return { ...state, _id, name, email, hobbies, description, avatar }
        case actionType.LOGOUT:
            localStorage.clear()
            return { ...state, _id, name, email, hobbies, description, avatar }
        case actionType.SET_AUTH:
            return { ...state, _id, name, email, hobbies, description, avatar }
        default:
            return state
    }
}