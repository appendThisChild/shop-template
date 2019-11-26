const express = require('express')
const app = express()

require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')

const expressJwt = require('express-jwt')
const { checkIfAdmin } = require("./utils/app.js")
const PORT = process.env.PORT || 6550

const options = {
    useNewUrlParser: true, 
    useFindAndModify: false, 
    useCreateIndex: true,
    useUnifiedTopology: true
}

app.use(express.json())
app.use(morgan('dev'))
app.use("/api", expressJwt({secret: process.env.SECRET}))
app.use("/api/admin", (req, res, next) => checkIfAdmin(req, res, next))

const conn = mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/shopping-template', options)
conn.then(() => console.log('[o] Connected to the DB'), (err) => console.log(err))

// routes
app.use('/template', require('./routes/templateRoutes.js'))
// shop
app.use('/api/admin/shop', require('./routes/shopAdminRoutes.js'))
// category
app.use('/category', require('./routes/categoryRoutes.js'))
app.use('/api/admin/category', require('./routes/categoryAdminRoutes.js'))
// product
app.use('/product', require('./routes/productRoutes.js'))
app.use('/api/admin/product', require('./routes/productAdminRoutes.js'))
// authorization 
app.use("/auth", require('./routes/authRoutes.js'))


app.use((err, req, res, next) => {
    console.log('Caught Error')
    console.log(err)
    if (err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

app.listen(PORT, () => {
    console.log(`[+] Server is running on PORT ${PORT}`)
})