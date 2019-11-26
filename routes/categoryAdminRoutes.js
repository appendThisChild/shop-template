const express = require('express')
const router = express.Router()
const Category = require('../models/category.js')

router.route('/')
    .post((req, res, next) => {
        const newCategory = new Category(req.body)
        newCategory.save((err, newCategory) => {
            if (err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(newCategory)
        })
    })

router.route('/:id')
    .put((req, res, next) => { 
        Category.findOneAndUpdate(
            { _id: req.params.id},
            req.body,
            {new: true},
            (err, updatedCategory) => {
                if (err){
                    res.status(500)
                    return next(err)
                }
                return res.status(202).send(updatedCategory)
            }
        )
    })
    .delete((req, res, next) => {
        Category.findOneAndRemove(
            {_id: req.params.id},
            (err, deletedCategory) => {
                if (err){
                    res.status(500)
                    return next(err)
                }
                // delete all products with category id
                



                return res.status(203).send(deletedCategory)
            }
        )
    })


module.exports = router;