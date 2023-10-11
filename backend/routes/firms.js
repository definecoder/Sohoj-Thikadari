const express = require('express')
const router = express.Router()

const { createFirm } = require('../controllers/firms')

router.route('/').post(createFirm)

module.exports = router;