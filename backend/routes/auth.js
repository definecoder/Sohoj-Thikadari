const express = require('express')
const router = express.Router()
const {login, createUser, forgotPassword} = require('../controllers/auth')

router.route('/login').post(login)
router.route('/register').post(createUser)
router.route('/forgotpassword').post(forgotPassword)

module.exports = router;