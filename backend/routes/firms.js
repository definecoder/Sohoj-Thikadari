const express = require('express')
const router = express.Router()

const { createFirm, getFirms, getFirm } = require('../controllers/firms')


router.route('/').post(createFirm).get(getFirms)
router.route('/:firmId').get(getFirm)
module.exports = router;