const express = require('express')
const router = express.Router()
const Category = require('../models/category.js')
const Product = require('../models/product.js')

router.route('/details')
    .get((req, res, next) => {
        Category.find((err, foundCategories) => {
            if (err){
                res.status(500)
                return next(err)
            }
            Product.find((err, foundProducts) => {
                if (err){
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send({ Categories: foundCategories.length, Products: foundProducts.length })
            })
        })
    })

// router.route('/')
//     .get((req, res, next) => {
//         console.log("Something")
//     })
//     .post((req, res, next) => {
//         console.log("Something")
//     })

// router.route('/:id')
//     .get((req, res, next) => {
//         console.log("Something")
//     })
//     .put((req, res, next) => {
//         console.log("Something") 
//     })
//     .delete((req, res, next) => {
//         console.log("Something")
//     })


module.exports = router;