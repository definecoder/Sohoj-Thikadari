const express = require('express')
const router = express.Router()

const { createBill, getBill } = require('../controllers/bills')


router.route('/').post(createBill)
router.route('/:billId').get(getBill)

module.exports = router;