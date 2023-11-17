
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

    // console.log("hi")

    const userEmail = req.body.email
    const otp = randomOTPGenerator();
    
    // check Existance of email
    const user = await prisma.user.findUnique({
        where: {
            email : userEmail
        }
    })

    if(!user){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'This is not a registered email' })
        return
    }

    const otptoken = jwt.sign({ id: user.id, OTP: otp }, process.env.JWT_SECRET, {
        expiresIn: 5 * 60,
    })
    

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
            name: user.username,
            intro: "OTP from Sohoj Thikadari is " + otp,
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


    res.status(StatusCodes.OK).json({ otptoken })    

}, {msg: "forgot password error"})


const validateOTP = asyncWrapper(async (req, res) =>{

    // console.log('hi')

    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        // throw new Error({ msg: 'No token provided' })
        console.log('No token Provided')
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Something Went Wrong!' })
        return
    }

    const token = authHeader.split(' ')[1]

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    // console.log(decoded.OTP);

    if(decoded.OTP == req.body.otp){
        res.status(StatusCodes.ACCEPTED).json(decoded.id);
    }
    else{
        res.status(StatusCodes.LOCKED).json({msg: "Wrong OTP"})
    }

        
    
}, {msg: "OTP validation Error"})


const updatePassword = asyncWrapper(async (req, res) =>{

    // console.log('hi')
    var saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds)

    const user = await prisma.user.update({
        data:{
            hashedPassword: hashedPassword
        },
        where:{
            id: req.body.id
        }
    })

    res.status(StatusCodes.CREATED).json(user);
        
    
}, {msg: "Error updating password"})

// forgotPassword({}, {})

const randomOTPGenerator = ()=>{
    const otp = Math.floor(1000 + Math.random() * 9000);
    return otp;
}

module.exports = {login, createUser, forgotPassword, validateOTP, updatePassword}