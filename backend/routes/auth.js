const express = require('express')
const router = express.Router()
const {login, createUser, forgotPassword, validateOTP, updatePassword} = require('../controllers/auth')

router.route('/login').post(login)
router.route('/register').post(createUser)
router.route('/forgotpassword').post(forgotPassword)
router.route('/validateotp').post(validateOTP)
router.route('/updatepassword').post(updatePassword)

module.exports = router;