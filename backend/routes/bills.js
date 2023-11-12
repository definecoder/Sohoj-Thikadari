const express = require('express')
const router = express.Router()

const { createBill, getBill, getAllBills, getBillsGov, updateBillsGov } = require('../controllers/bills')


router.route('/').post(createBill)
router.route('/:billId').get(getBill)
router.route('/all/:firmId').get(getAllBills)
router.route('/govtBills/:firmId').get(getBillsGov).put(updateBillsGov)

module.exports = router;