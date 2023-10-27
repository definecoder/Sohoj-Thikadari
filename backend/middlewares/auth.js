const jwt = require('jsonwebtoken')
const { StatusCodes } = require('http-status-codes')

const authenticationMiddleware = async (req, res, next) => {


    try {
        const authHeader = req.headers.authorization

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw new Error({ msg: 'No token provided' })
        }

        const token = authHeader.split(' ')[1]

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const { id, phone } = decoded
        req.user = { id, phone }
        next()
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'authentication failed' })
    }
}

module.exports = authenticationMiddleware
