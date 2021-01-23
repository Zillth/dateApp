import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import userModel from '../models/user.js'

const secret = process.env.TOKEN_SECRET

export const SignIn = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await userModel.findOne({ email })
        if (!user) return res.status(404).json({ message: "User doesn't exist" })
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" })
        const token = jwt.sign({ email: user.email, id: user._id }, secret, { expiresIn: "24h" })
        res.status(200).json({ result: user, token })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" })
    }
}

export const signUp = async (req, res) => {
    const { firstName, lastName, email, password } = req.body
    try {
        const user = userModel.findOne({ email })
        if (user) return res.status(400).json({ message: "User already exist" })
        const hashedPassword = await bcrypt.hash(password, 12)
        const result = await userModel.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` })
        const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: "24h" })
        res.status(201).json({ result, token })
    } catch (error) {
        res.status(500).json({message: "Something went wrong"})
    }
}