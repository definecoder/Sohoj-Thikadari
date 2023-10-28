const { StatusCodes } = require('http-status-codes')
const { PrismaClient } = require('@prisma/client')
const asyncWrapper = require('../middlewares/asyncWrapper')
const prisma = new PrismaClient()

const addProgram = asyncWrapper(async (req, res) => {

    const newProgram = await prisma.program.create({ data: req.body })
    res.status(StatusCodes.OK).json(newProgram)

}, { msg: 'Couldn\'t add program' })

module.exports = {
    addProgram
}