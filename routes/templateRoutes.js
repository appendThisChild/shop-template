const express = require('express')
const router = express.Router()
const Template = require('../models/template.js')

router.route('/')
    .get((req, res, next) => {
        console.log("Something")
    })
    .post((req, res, next) => {
        console.log("Something")
    })

router.route('/:id')
    .get((req, res, next) => {
        console.log("Something")
    })
    .put((req, res, next) => {
        console.log("Something") 
    })
    .delete((req, res, next) => {
        console.log("Something")
    })


module.exports = router;