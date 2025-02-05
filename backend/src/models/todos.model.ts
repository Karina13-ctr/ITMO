import { Schema, model } from "mongoose";

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
})

export default model('todos', schema)