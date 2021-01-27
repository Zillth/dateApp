import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    hobbies: { type: [String], default: [] },
})

export default mongoose.model('User', userSchema)