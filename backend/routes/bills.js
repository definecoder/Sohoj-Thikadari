const express = require('express')
const router = express.Router()

const { createBill, getBill, getAllBills } = require('../controllers/bills')


router.route('/').post(createBill)
router.route('/:billId').get(getBill)
router.route('/all/:firmId').get(getAllBills)

module.exports = router;