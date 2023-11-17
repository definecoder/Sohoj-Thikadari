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
    firms = await prisma.firm.findMany({
        where: {
            userID: req.user.id,
        },
        orderBy:{
            createdAt: 'asc'
        }
    })
    res.status(StatusCodes.OK).json([{Firm: firms}])

}, { msg: "Couldn\'t fetch firms", code: 404 })

const getFirm = asyncWrapper(async (req, res) => {
   
    const firm = await prisma.firm.findUnique({
        where:{
            id: req.params.firmId
        }
    })

    res.status(StatusCodes.OK).json(firm)

}, { msg: "Couldn\'t fetch the firm", code: 404 })


module.exports = { createFirm, getFirms, getFirm }