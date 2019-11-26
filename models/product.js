const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    subTitle: {
        type: String,
        required: true
    },
    category_id: {
        type: String,
        required: true
    },
    price: {
        type: Object,
        required: true
    },
    description: {
        type: Array,
        default: ["text...", "text...", "text..."]
    },
    quantity: {
        type: Number,
        default: 0
    },
    active: {
        type: Boolean,
        default: false
    },
    image_id: {
        type: String,
        default: "none"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Product", productSchema)