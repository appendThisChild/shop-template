const express = require('express')
const router = express.Router()
const Product = require('../models/product.js')

router.route('/all/:id')
    .post((req, res, next) => {
        console.log(req.body)
        // contains information about page selections to narrow down product display
        
        Product.find(
            {category_id: req.params.id},
            (err, foundProducts) => {
            if (err){
                res.status(500)
                return next(err)
            }
            
            console.log("Something")
            return res.status(200).send(foundProducts)
        })
    })

router.route('/:id')
    .get((req, res, next) => {
        Product.findOne(
            {_id : req.params.id},
            (err, foundProduct) => {
                if (err){
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(foundProduct)
            }
        )
    })

module.exports = router;