const { StatusCodes } = require('http-status-codes')
const { PrismaClient } = require('@prisma/client')
const asyncWrapper = require('../middlewares/asyncWrapper')
const prisma = new PrismaClient()

const addSendingInfo = asyncWrapper(async (req, res) => {
    const newInvoice = await prisma.invoice.create({
        data: req.body
    })
    res.status(StatusCodes.OK).json(newInvoice)

}, { msg: 'Couldn\'t add Sending Info' })

const updateReceivingInfo = asyncWrapper(async (req, res) => {

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


}, { msg: 'Couldn\'t update receiving Info' })

const updateRateAndDistance = asyncWrapper(async (req, res) => {

    const updatedInvoices = req.body.invoices.map((invoice) => {
        return prisma.invoice.update({
            data: {
                distance: invoice.distance,
                pricePerTon: invoice.pricePerTon
            },
            where: {
                invoiceNo: invoice.id
            }
        })
    })

    const updatedInvoicesP = await Promise.all(updatedInvoices)
    res.status(StatusCodes.OK).json(updatedInvoicesP)


}, { msg: 'Couldn\'t update rate and distance' })



const getAllInvoiceForBill = asyncWrapper(async (req, res) => {

    const invoices = await prisma.firm.findUnique({
        where: {
            id: req.params.firmId
        },
        select: {
            Invoice: {
                where: {
                    NOT: {
                        receivingDate: {
                            equals: null
                        }
                    },
                    distance: {
                        equals: null
                    }
                }
            }
        }
    })

    res.status(StatusCodes.OK).json(invoices)

}, { msg: 'Couldn\'t get invoices for bill' })

const getAllOnlySending = asyncWrapper(async (req, res) => {

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

}, { msg: 'Couldn\'t fetch Sending invoice' })

const updateBill = async (req, res) => {

}

const getInvoice = async (req, res) => {

}

const getAllInvoice = async (req, res) => {

}

module.exports = {
    addSendingInfo,
    updateReceivingInfo,
    updateRateAndDistance,
    updateBill,
    getInvoice,
    getAllInvoice,
    getAllOnlySending,
    getAllInvoiceForBill
}