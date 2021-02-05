import express from 'express'
const router = express.Router()

import { signIn, signUp, setFromGoogle } from '../controllers/user.js'

router.post('/signIn', signIn)
router.post('/signUp', signUp)
router.post('/setFromGoogle', setFromGoogle)

export default router