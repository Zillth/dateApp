import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import userModel from '../models/user.js'
dotenv.config()

const secret = process.env.TOKEN_SECRET

export const signIn = async (req, res) => {
    const { email, password, googleObj } = req.body
    try {
        if (googleObj) {
            let userGoogle = await userModel.findOne({ googleId: googleObj.googleId })
            if (!userGoogle) {
                const { name, email, googleId, imageUrl } = googleObj
                userGoogle = await userModel.create({ name, email, googleId, avatar: imageUrl })
            }
            const token = jwt.sign({ id: userGoogle._id }, secret, { expiresIn: "24h" })
            res.status(200).json({ userGoogle, token })
        } else {
            let user = await userModel.findOne({ email })
            if (user.googleId) return res.status(404).json({ message: "This user has been authentificated with google, please sign in with google" })
            if (!user) return res.status(404).json({ message: "User doesn't exist" })
            const isPasswordCorrect = await bcrypt.compare(password, user.password)
            if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" })
            const token = jwt.sign({ id: user._id }, secret, { expiresIn: "24h" })
            res.status(200).json({ user, token })
        }
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" })
    }
}

export const signUp = async (req, res) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body
    if (password !== confirmPassword) return res.status(400).json({ message: "Passwords doesn't match" })
    try {
        const userExist = await userModel.findOne({ email })
        if (userExist) return res.status(400).json({ message: "User already exist" })
        const hashedPassword = await bcrypt.hash(password, 12)
        const user = await userModel.create({ name: `${firstName} ${lastName}`, email, password: hashedPassword })
        const token = jwt.sign({ email: user.email, id: user._id }, secret, { expiresIn: "24h" })
        res.status(201).json({ user, token })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" })
    }
}

export const setFromGoogle = async (req, res) => {
    const { googleId } = req.body
    try {
        const userExist = await userModel.findOne({ googleId })
        if (userExist) return res.status(400)
        const user = await userModel.create({ googleId })
        const token = jwt.sign({ googleId }, secret, { expiresIn: "24h" })
        res.status(200).json({ user, token })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Something went wrong" })
    }
}

export const getUser = async (req, res) => {
    try {
        const user = mongoose.isValidObjectId(req.params.userId) ? await userModel.findOne({ _id: req.params.userId }) : await userModel.findOne({ googleId: req.params.userId })
        if (!user) return res.status(200).json({ message: "User not exist" })
        res.status(200).json({ user })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Something went wrong" })
    }
}