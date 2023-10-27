const express = require('express')
const router = express.Router()

const { addProgram } = require('../controllers/program')
router.route('/').post(addProgram)

module.exports = router;