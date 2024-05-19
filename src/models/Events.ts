import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: false,
    },
    link: {
        type: String,
        required: true,
    },
    provider: {
        type: String,
        required: true
    },
    hours: {
        type: Number,
        required: true
    },
    certification: {
        type: Boolean,
        required: true
    },
    theme: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model('Events', eventSchema)