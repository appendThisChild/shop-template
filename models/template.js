const mongoose = require('mongoose')
const Schema = mongoose.Schema

const templateSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Template", templateSchema)