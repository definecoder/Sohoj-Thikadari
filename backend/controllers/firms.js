const { StatusCodes } = require('http-status-codes')
const { pool } = require('../database/database')

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


const createFirm = async (req, res) => {
    try {
        req.body.userID = req.user.id
        const newFirm = await prisma.firm.create({ data: req.body })
        res.status(StatusCodes.CREATED).json(newFirm)
    }
    catch (err) {
        console.log(err)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Couldn\'t create the firm" })
    }
}

const getFirms = async (req, res) => {
    try {
        firms = await prisma.user.findMany({
            where: {
                id: req.user.id
            },
            select: {
                Firm: true
            }
        })

        res.status(StatusCodes.OK).json(firms)

    } catch (err) {
        console.log(err)
        res.status(StatusCodes.NOT_IMPLEMENTED).json({ msg: "Couldn\'t fetch firms" })
    }
}


module.exports = { createFirm, getFirms }