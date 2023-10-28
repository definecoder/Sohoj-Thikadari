const { StatusCodes } = require('http-status-codes')
const { PrismaClient } = require('@prisma/client')
const asyncWrapper = require('../middlewares/asyncWrapper')
const prisma = new PrismaClient()


const createFirm = asyncWrapper(async (req, res) => {

    req.body.userID = req.user.id
    const newFirm = await prisma.firm.create({ data: req.body })
    res.status(StatusCodes.CREATED).json(newFirm)

}, { msg: "Couldn\'t create the firm" })

const getFirms = asyncWrapper(async (req, res) => {
    firms = await prisma.user.findMany({
        where: {
            id: req.user.id
        },
        select: {
            Firm: true
        }
    })
    res.status(StatusCodes.OK).json(firms)

}, { msg: "Couldn\'t fetch firms", code: 404 })


module.exports = { createFirm, getFirms }