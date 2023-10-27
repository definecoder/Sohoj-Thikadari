const { StatusCodes } = require('http-status-codes')
const { PrismaClient } = require('@prisma/client')
const { where } = require('sequelize')
const prisma = new PrismaClient()

const addSendingInfo = async (req, res) => {
    try {
        const newInvoice = await prisma.invoice.create({
            data: req.body
        })
        res.status(StatusCodes.OK).json(newInvoice)

    } catch (err) {
        console.log(err)
        req.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Couldn\'t add Sending Info' })
    }
}

const updateReceivingInfo = async (req, res) => {
    try {
        const invoiceExist = await prisma.invoice.count({
            where: {
                invoiceNo: parseInt(req.params.id)
            }
        })
        if (!invoiceExist) {
            res.status(StatusCodes.NOT_FOUND).json({ msg: 'invoice not found' })
            return
        }
        const invoice = await prisma.invoice.update({
            data: req.body,
            where: {
                invoiceNo: parseInt(req.params.id)
            }
        })

        res.status(StatusCodes.OK).json(invoice)

    } catch (err) {
        console.log(err)
        req.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Couldn\'t update receiving Info' })
    }
}

const updateRateAndDistance = async (req, res) => {

}

const updateBill = async (req, res) => {

}

const getInvoice = async (req, res) => {

}

const getAllInvoice = async (req, res) => {

}

const getAllInvoiceForBill = async (req, res) => {

}

const getAllOnlySending = async (req, res) => {
    try {

        const invoices = await prisma.firm.findUnique({

            where: {
                id: req.params.firmId
            },
            select: {
                Invoice: {
                    where: {
                        receivingDate: {
                            equals: null
                        }
                    }
                }
            }
        })

        res.status(StatusCodes.OK).json(invoices)

    } catch (err) {
        console.log(err)
        req.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Couldn\'t fetch Sending invoice' })
    }
}



module.exports = {
    addSendingInfo,
    updateReceivingInfo,
    updateRateAndDistance,
    updateBill,
    getInvoice,
    getAllInvoice,
    getAllOnlySending
}