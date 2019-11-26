const express = require('express')
const router = express.Router()
const Category = require('../models/category.js')

router.route('/')
    .get((req, res, next) => {
        Category.find((err, foundCategories) => {
            if (err){
                res.status(500)
                return next(err)
            }
            foundCategories.sort((a, b)=> {
                const x = a.title.toLowerCase();
                const y = b.title.toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
            })
            return res.status(200).send(foundCategories)
        })
    })

router.route('/:id')
    .get((req, res, next) => {
        console.log("Something")
        
    })

module.exports = router;