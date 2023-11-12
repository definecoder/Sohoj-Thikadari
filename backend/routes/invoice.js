const express = require('express')
const router = express.Router()

const { addSendingInfo, updateReceivingInfo, updateRateAndDistance, updateBill, getInvoice, getRecentInvoice, getAllOnlySending, getAllInvoiceForBill } = require('../controllers/invoice')


// here id means invoice number

router.route('/sending').post(addSendingInfo)
router.route('/sending/:firmId').get(getAllOnlySending)
router.route('/receiving/:id').put(updateReceivingInfo)
router.route('/:id').get(getInvoice)
router.route('/rateAndDistance/').put(updateRateAndDistance)
router.route('/addbill/:firmId').put(updateBill)
router.route('/forbill/:firmId').get(getAllInvoiceForBill)

module.exports = router;