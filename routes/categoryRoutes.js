const express = require('express')
const router = express.Router()
const Category = require('../models/category.js')

router.route('/')
    .get((req, res, next) => {
        console.log("Something")
    })

router.route('/:id')
    .get((req, res, next) => {
        console.log("Something")
    })

module.exports = router;