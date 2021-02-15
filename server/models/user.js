import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    email: { type: String },
    password: { type: String },
    name: { type: String },
    hobbies: { type: [String], default: [] },
    description: { type: String, default: '' },
    googleId: { type: String },
    avatar: { type: String, default: '' },
    banner: { type: String, default: '' }
})

export default mongoose.model('User', userSchema)