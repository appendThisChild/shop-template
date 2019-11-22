const express = require('express')
const router = express.Router()
const Category = require('../models/category.js')

router.route('/')
    .post((req, res, next) => {
        console.log("Something")
    })

router.route('/:id')
    .put((req, res, next) => {
        console.log("Something") 
    })
    .delete((req, res, next) => {
        console.log("Something")
    })


module.exports = router;