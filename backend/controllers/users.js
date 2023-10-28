
const { StatusCodes } = require('http-status-codes')

const { PrismaClient } = require('@prisma/client')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const asyncWrapper = require('../middlewares/asyncWrapper')
const saltRounds = 10

const prisma = new PrismaClient();

const createUser = asyncWrapper(async (req, res) => {

    req.body.hashedPassword = await bcrypt.hash(req.body.password, saltRounds)
    req.body.password = undefined
    const newUser = await prisma.user.create({ data: req.body })

    const token = jwt.sign({ id: newUser.id, phone: newUser.phone }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
    res.status(StatusCodes.CREATED).json({ token })

}, { msg: "Couldn\'t create user" })

const getAllUsers = asyncWrapper(async (req, res) => {

    const allUsers = await prisma.user.findMany({
        include: {
            Firm: true
        }
    })
    res.status(StatusCodes.OK).json(allUsers)

}, { msg: 'Couldn\'t fetch users' })


module.exports = {
    createUser,
    getAllUsers
}