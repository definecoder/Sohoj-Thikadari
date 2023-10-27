const express = require('express')
const router = express.Router()

const { createFirm, getFirms } = require('../controllers/firms')


router.route('/').post(createFirm).get(getFirms)
module.exports = router;