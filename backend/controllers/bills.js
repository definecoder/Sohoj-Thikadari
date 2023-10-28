const { StatusCodes } = require('http-status-codes')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


const createBill = async (req, res) => {
    try {

        const newBill = await prisma.bill.create({
            data: {
                firmID: req.body.firmID,
                billNo: req.body.billNo,
                date: req.body.date
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

        // calculate amount here from invoice rate and distances (I don't know how it works)


        res.status(StatusCodes.CREATED).json({ newBill, updatedInvoicesP })
    }
    catch (err) {
        console.log(err)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Couldn\'t create the bill" })
    }
}

const getBill = async (req, res) => {
    try {

        bill = await prisma.bill.findUnique({
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
    }
    catch (err) {
        console.log(err)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Couldn\'t get the bill" })
    }
}





module.exports = {
    createBill,
    getBill
}
