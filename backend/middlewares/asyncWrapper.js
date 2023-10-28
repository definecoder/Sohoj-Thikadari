const { StatusCodes } = require("http-status-codes");

const asyncWrapper = (fn, errorInfo = {}) => {

    const statusCode = errorInfo.code || StatusCodes.INTERNAL_SERVER_ERROR
    const msg = errorInfo.msg || 'Something Went Wrong!!'

    return async (req, res, next) => {
        try {
            await fn(req, res, next)
        } catch (error) {
            console.log(error)
            res.status(statusCode).json({ msg, err: error.message });
        }
    }
}
module.exports = asyncWrapper
