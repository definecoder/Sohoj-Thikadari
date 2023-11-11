
const jwt = require('jsonwebtoken')
const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt')
const { StatusCodes } = require('http-status-codes')
const asyncWrapper = require('../middlewares/asyncWrapper')


const prisma = new PrismaClient()

const login = asyncWrapper(async (req, res) => {

    const { phone, password } = req.body
    if (!phone || !password) {
        // throw new Error('Please provide email and password')
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Please Provide Email & Password' })
        return
    }

    const user = await prisma.user.findUnique({
        where: { phone: phone }
    })

    if(!user){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'This number is not registered' })
        return
    }

    const passwordMatched = await bcrypt.compare(password, user.hashedPassword)

    if (!passwordMatched) {
        // throw new Error("Password Did not matched!!")
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Password did not match!' })
        return
    }

    const token = jwt.sign({ id: user.id, phone: user.phone }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })

    res.status(StatusCodes.ACCEPTED).json({ token })

}, { msg: 'Login Failed' })



module.exports = login