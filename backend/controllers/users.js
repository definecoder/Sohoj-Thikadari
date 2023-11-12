
const { StatusCodes } = require('http-status-codes')

const { PrismaClient } = require('@prisma/client')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const asyncWrapper = require('../middlewares/asyncWrapper')
const saltRounds = 10

const prisma = new PrismaClient();

const createUser = asyncWrapper(async (req, res) => {

    req.body.hashedPassword = await bcrypt.hash(req.body.password, saltRounds)
    req.body.password = undefined
    const newUser = await prisma.user.create({ data: req.body })

    const token = jwt.sign({ id: newUser.id, phone: newUser.phone }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
    res.status(StatusCodes.CREATED).json({ token })

}, { msg: "Couldn\'t create user" })

const getAllUsers = asyncWrapper(async (req, res) => {

    const allUsers = await prisma.user.findMany({
        include: {
            Firm: true
        }
    })
    res.status(StatusCodes.OK).json(allUsers)

}, { msg: 'Couldn\'t fetch users' })

const getUserDashboardInfo = asyncWrapper( async (req, res) => {
        
    const invoices = await prisma.$queryRaw`
        SELECT * FROM Firm, Invoice  
        WHERE Firm.userID = ${req.user.id} AND Invoice.firmID = Firm.id
        ORDER BY Invoice.updatedAt DESC
        LIMIT 10;
    `

    const invoiceCount = await prisma.invoice.count({
        where:{
            firm:{
                userID: {
                    equals: req.user.id
                }
            }
        },
        
        
    })

    const billCount = await prisma.bill.count({
        where:{
            firm:{
                userID: {
                    equals: req.user.id
                }
            }
        }
    })

    const firmCount = await prisma.firm.count({
        where:{
            userID:{
                equals: req.user.id
            }
        }
    })

    const username = await prisma.user.findUnique({
        where:{
            id: req.user.id
        },
        select:{
            username:true
        }
    })

    const newsData = await prisma.news.findMany()

    // console.log(invoiceCount, billCount, firmCount, username)

    // console.log(newsData)


    res.status(StatusCodes.OK).json({Invoice: invoices, invoiceCount, billCount, firmCount, username: username.username, newsData})


}, {msg: 'Couldn\'t fetch recent invoices'})

module.exports = {
    createUser,
    getAllUsers,
    getUserDashboardInfo
}