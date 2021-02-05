import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

import userModel from '../models/user.js'
import userInfo from '../models/userInfo.js'
dotenv.config()

const secret = process.env.TOKEN_SECRET

export const signIn = async (req, res) => {
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
    const { firstName, lastName, email, password, confirmPassword } = req.body
    if (password !== confirmPassword) return res.status(400).json({ message: "Passwords doesn't match" })
    try {
        const user = await userModel.findOne({ email })
        if (user) return res.status(400).json({ message: "User already exist" })
        const hashedPassword = await bcrypt.hash(password, 12)
        const userCreated = await userModel.create({ email, password: hashedPassword })
        await userInfo.create({ userId: userCreated._id, name: `${firstName} ${lastName}` })
        const token = jwt.sign({ email: userCreated.email, id: userCreated._id }, secret, { expiresIn: "24h" })
        res.status(201).json({ userCreated, token })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" })
    }
}

export const setFromGoogle = async (req, res) => {
    const { name, imageUrl, googleId } = req.body
    try {
        const user = await userInfo.findOne({ userId: googleId })
        if (user) return res.status(400)
        const userInfoSetted = await userInfo.create({ name, image: imageUrl, userId: googleId })
        res.status(200).json({ userInfoSetted })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Something went wrong" })
    }
}