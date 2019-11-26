const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Category", categorySchema)