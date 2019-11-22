function checkIfAdmin(req, res, next){
    if(req.user.isAdmin){
        next()
    } else {
        res.status(401)
        return next(new Error("Not authorized"))
    }
}

module.exports = { checkIfAdmin }