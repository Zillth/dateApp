import express from 'express'
const router = express.Router()

import { signIn, signUp } from '../controllers/user.js'

router.post('/signIn', SignIn)
router.post('/signUp', signUp)

export default router