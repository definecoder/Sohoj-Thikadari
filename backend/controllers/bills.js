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
            submittedTo: req.body.submittedTo,
        }
    })


    const receivingInfo = req.body.invoices.map((invoice)=>{
        return prisma.invoice.findUnique({
            where:{
                invoiceNo: invoice.id
            },
            select:{
                receivingGrossQuantity:true
            }
        })
    })
    const receivingInfoP = await Promise.all(receivingInfo)
    // return

    

    const updatedInvoices = req.body.invoices.map((invoice, index) => {
        return prisma.invoice.update({
            data: {
                distance: parseFloat(invoice.distance),
                pricePerTon: parseFloat(invoice.pricePerTon),
                invoiceAmount: (parseFloat(invoice.pricePerTon) * receivingInfoP[index].receivingGrossQuantity),
                billID: newBill.id,
                status: invoice.status
            },
            where: {
                invoiceNo: invoice.id
            }
        })
    })

    const invoices = await Promise.all(updatedInvoices)

    // calculate amount here from invoice rate and distances and update bill amount (I don't know how it works)

    let billAmount = 0
    invoices.forEach((invoice)=>{
        billAmount += invoice.invoiceAmount
    })


    const bill = await prisma.bill.update({
        data:{
            amount: billAmount
        },
        include:{
            Invoice: true
        },
        where:{
            id: newBill.id
        }
    })



    res.status(StatusCodes.CREATED).json({ bill})

}, { msg: 'Couldn\'t, create the bill' })

const getBill = asyncWrapper(async (req, res) => {
    const bill = await prisma.bill.findUnique({
        select: {
            billNo: true,
            date: true,
            amount: true,
            Invoice: true,
            submittedTo: true,
            commodity: true,
            firm: {
                select: {
                    name: true,
                    phone: true,
                    address: true,
                }
            },
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
            Invoice: true
        },
        where: {
            firmID: req.params.firmId
        }
    })

    res.status(StatusCodes.OK).json(bills)

}, { code: 404, msg: "Couldn\'t get bills" })


const getBillsGov = asyncWrapper(async (req, res) => {

    const bills = await prisma.bill.findMany({
        
        where: {
            firmID: req.params.firmId,
            govtBillNo: null
        }
    })

    res.status(StatusCodes.OK).json(bills)

}, { code: 404, msg: "Couldn\'t get bills for government" })


const updateBillsGov = asyncWrapper(async (req, res) => {

    const bills = await prisma.bill.update({
        data:{
            govtBillNo: req.body.govtBillNo,
            govtBillDate: req.body.govtBillDate,            
        },
        where: {
            firmID: req.params.firmId,
            id: req.body.billId
        }
    })

    const invoices = await prisma.$queryRaw`
        UPDATE Invoice SET status = 4
        WHERE firmID = ${req.params.firmId} AND billID = ${req.body.billId};
    `

    res.status(StatusCodes.OK).json(bills)

}, { code: 404, msg: "Couldn\'t update bill for government" })

module.exports = {
    createBill,
    getBill,
    getAllBills,
    getBillsGov,
    updateBillsGov
}
