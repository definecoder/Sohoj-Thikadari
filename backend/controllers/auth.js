
const jwt = require('jsonwebtoken')
const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt')
const { StatusCodes } = require('http-status-codes')
const asyncWrapper = require('../middlewares/asyncWrapper')
const nodemailer = require('nodemailer')
const Mailgen = require('mailgen')


const EMAIL = process.env.EMAIL
const PASSWORD = process.env.PASSWORD


const prisma = new PrismaClient()

const login = asyncWrapper(async (req, res) => {

    const { phone, password } = req.body
    if (!phone || !password) {
        // throw new Error('Please provide email and password')
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Please Provide Email & Password' })
        return
    }

    const user = await prisma.user.findUnique({
        where: { phone: phone }
    })

    if(!user){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'This number is not registered' })
        return
    }

    const passwordMatched = await bcrypt.compare(password, user.hashedPassword)

    if (!passwordMatched) {
        // throw new Error("Password Did not matched!!")
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Password did not match!' })
        return
    }

    const token = jwt.sign({ id: user.id, phone: user.phone }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })

    res.status(StatusCodes.ACCEPTED).json({ token })

}, { msg: 'Login Failed' })

const createUser = asyncWrapper(async (req, res) => {

    var saltRounds = 10;
    req.body.hashedPassword = await bcrypt.hash(req.body.password, saltRounds)
    req.body.password = undefined
    const newUser = await prisma.user.create({ data: req.body })

    const token = jwt.sign({ id: newUser.id, phone: newUser.phone }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
    res.status(StatusCodes.CREATED).json({ token })

}, { msg: "Couldn\'t create user, Check if your phone number is registerd already!" })

const forgotPassword = asyncWrapper(async (req, res) =>{

    const userEmail = 'shawon.majid@gmail.com'

    let config = {
        service: 'gmail',
        auth: {
            user: EMAIL, 
            pass: PASSWORD
        }
    }

    let transporter = nodemailer.createTransport(config)

    let MailGenerator = new Mailgen({
        theme: "default",
        product: {
            name: "Mailgen",
            link: "https://mailgen.js/"
        }
    })

    let response = {
        body: {
            name: "Mehrajul Islam",
            intro: "OTP from Sohoj Thikadari is 2134",
            outro:  "Your OTP is valid for 5 minutes\nBest Regards, Team Sohoj Thikadari",
            // signature: 'Best regards, Team Sohoj Thikadari'
            signature: false

        }
    }

    let mail = MailGenerator.generate(response)

    let message = {
        from : EMAIL, 
        to: userEmail,
        subject: 'Forget Password OTP',
        html: mail
    }


    await transporter.sendMail(message)

}, {msg: "forgot password error"})


// forgotPassword({}, {})

module.exports = {login, createUser, forgotPassword}