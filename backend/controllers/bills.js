const { StatusCodes } = require('http-status-codes')
const { PrismaClient } = require('@prisma/client')
const asyncWrapper = require('../middlewares/asyncWrapper')
const prisma = new PrismaClient()


const createBill = asyncWrapper(async (req, res) => {

    const newBill = await prisma.bill.create({
        data: {
            firmID: req.body.firmID,
            billNo: req.body.billNo,
            date: req.body.date,
            submittedTo: req.body.submittedTo
        }
    })



    const updatedInvoices = req.body.invoices.map((invoice) => {
        return prisma.invoice.update({
            data: {
                distance: invoice.distance,
                pricePerTon: invoice.pricePerTon,
                billID: newBill.id
            },
            where: {
                invoiceNo: invoice.id
            }
        })
    })

    const updatedInvoicesP = await Promise.all(updatedInvoices)

    // calculate amount here from invoice rate and distances and update bill amount (I don't know how it works)


    res.status(StatusCodes.CREATED).json({ newBill, updatedInvoicesP })

}, { msg: 'Couldn\'t, create the bill' })

const getBill = asyncWrapper(async (req, res) => {
    const bill = await prisma.bill.findUnique({
        include: {
            Invoice: {
                include: {
                    program: true
                }
            }
        },
        where: {
            id: req.params.billId
        }
    })
    res.status(StatusCodes.OK).json(bill)

}, { code: 404, msg: "Couldn\'t get the bill" })

const getAllBills = asyncWrapper(async (req, res) => {

    const bills = await prisma.bill.findMany({
        include: {
            Invoice: {
                include: {
                    program: true
                }
            }
        },
        where: {
            firmID: req.params.firmId
        }
    })

    res.status(StatusCodes.OK).json(bills)

}, { code: 404, msg: "Couldn\'t get bills" })

module.exports = {
    createBill,
    getBill,
    getAllBills
}
