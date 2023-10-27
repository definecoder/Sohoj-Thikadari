const { StatusCodes } = require('http-status-codes')
const { pool } = require('../database/database')

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const addProgram = async (req, res) => {
    try {

        const newProgram = await prisma.program.create({ data: req.body })
        res.status(StatusCodes.OK).json(newProgram)

    }
    catch (err) {
        console.log(err)
        req.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Couldn\'t add program' })
    }

}

module.exports = {
    addProgram
}