
const { pool } = require('../database/database')
const { StatusCodes } = require('http-status-codes')

const { PrismaClient } = require('@prisma/client')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const saltRounds = 10

const prisma = new PrismaClient();

const createUser = async (req, res) => {

    try {
        req.body.hashedPassword = await bcrypt.hash(req.body.password, saltRounds)
        req.body.password = undefined
        const newUser = await prisma.user.create({ data: req.body })


        const token = jwt.sign({ id: newUser.id, phone: newUser.phone }, process.env.JWT_SECRET, {
            expiresIn: '30d',
        })

        res.status(StatusCodes.CREATED).json({ token })
    }
    catch (err) {
        console.log(err)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Couldn\'t create user" })
    }

}

const getAllUsers = async (req, res) => {

    try {
        const allUsers = await prisma.user.findMany({
            include: {
                Firm: true
            }
        })
        res.status(StatusCodes.OK).json(allUsers)
    }
    catch (err) {
        console.log(err)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Couldn\'t fetch users' })
    }


    // console.log(allUsers)

}


module.exports = {
    createUser,
    getAllUsers
}