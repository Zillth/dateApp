import express from 'express'
const router = express.Router()

import { signIn, signUp, setFromGoogle, getUser } from '../controllers/user.js'

router.post('/signIn', signIn)
router.post('/signUp', signUp)
router.post('/setFromGoogle', setFromGoogle)
router.get('/:userId', getUser)

export default router