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

const conn = mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/booking-template', options)
conn.then(() => console.log('[o] Connected to the DB'), (err) => console.log(err))

// routes
app.use('/template', require('./routes/templateRoutes.js'))
// category
app.use('/category', require('./routes/categoryRoutes.js'))
app.use('/api/admin/category', require('./routes/categoryAdminRoutes.js'))
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