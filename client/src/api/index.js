import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

// Users
export const fetchUsers = () => API.get('/users')
export const findUser = (userId) => API.get(`/users/${userId}`)
export const createUser = (newUser) => API.post('/users', newUser)
export const updateUser = (userId, userUpdated) => API.patch(`/users/${userId}`, userUpdated)
export const deleteUser = (userId) => API.delete(`/users/${userId}`)

// Auth
export const signIn = (formData) => API.post('/users/signIn', formData)
export const signUp = (formData) => API.post('/users/signUp', formData)