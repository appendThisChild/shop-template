const express = require('express')
const router = express.Router()
const Product = require('../models/product.js')

router.route('/')
    .post((req, res, next) => {
        const newProduct = new Product(req.body)
        newProduct.save((err, newProduct) => {
            if (err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(newProduct)
        })
    })

router.route('/:id')
    .put((req, res, next) => {
        Product.findOneAndUpdate(
            { _id: req.params.id},
            req.body,
            {new: true},
            (err, updatedProduct) => {
                if (err){
                    res.status(500)
                    return next(err)
                }
                return res.status(202).send(updatedProduct)
            }
        )
    })
    .delete((req, res, next) => {
        Product.findOneAndRemove(
            {_id: req.params.id},
            (err, deletedProduct) => {
                if (err){
                    res.status(500)
                    return next(err)
                }
                // request to delete photos


                return res.status(203).send(deletedProduct)
            }
        )
    })


module.exports = router;