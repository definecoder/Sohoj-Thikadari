
const jwt = require('jsonwebtoken')
const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt')
const { StatusCodes } = require('http-status-codes')


const prisma = new PrismaClient()

const login = async (req, res) => {

    try {
        const { phone, password } = req.body
        if (!phone || !password) {
            throw new Error('Please provide email and password')
        }

        const user = await prisma.user.findUniqueOrThrow({
            where: { phone: phone }
        })

        const passwordMatched = await bcrypt.compare(password, user.hashedPassword)

        if (!passwordMatched) {
            throw new Error("Password Did not matched!!")
        }

        const token = jwt.sign({ id: user.id, phone: user.phone }, process.env.JWT_SECRET, {
            expiresIn: '30d',
        })

        res.status(StatusCodes.ACCEPTED).json({ token })
    }
    catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}



module.exports = login