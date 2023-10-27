const express = require('express')
const router = express.Router()

const { addSendingInfo, updateReceivingInfo, updateRateAndDistance, updateBill, getInvoice, getAllInvoice, getAllOnlySending } = require('../controllers/invoice')


router.route('/sending').post(addSendingInfo).get(getAllOnlySending)
router.route('/receiving/:id').put(updateReceivingInfo)
router.route('/:id').get(getInvoice)
router.route('/all').get(getAllInvoice)
router.route('/rateAndDistance').put(updateRateAndDistance)
router.route('/addbill').put(updateBill)


router.route('')

module.exports = router;