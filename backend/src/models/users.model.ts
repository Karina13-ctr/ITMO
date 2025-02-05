import { Schema, model } from "mongoose";

const schema = new Schema({
    username: {
        type: String,
        default: 'Username'
    },
    email: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    token_login: {
        type: String
    }
})

export default model('users', schema)