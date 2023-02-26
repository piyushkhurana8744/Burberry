const jwt = require("jsonwebtoken")

const AdminChecker = (req, res, next) => {
    const token = req.headers.authorization
    if (!token) {
        res.send({
            error: "Access Denied",
            msg: "Provide Token"
        })
    } else {
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {
                res.send({
                    error: "Access Denied",
                    msg: err.message
                })
            }
            if (decoded) {
                if (decoded.isAdmin) {
                    next()
                } else {
                    res.send({
                        error: "Access Denied",
                        msg: "You are not Admin"
                    })
                }

            } else {
                res.send({
                    error: "Access Denied",
                    msg: "Not able to decode token"
                })
            }
        })
    }
}

module.exports = {
    AdminChecker
}