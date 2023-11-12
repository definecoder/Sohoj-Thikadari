const express = require('express')
const router = express.Router()

const { getAllUsers, getUserDashboardInfo } = require('../controllers/users')
router.route('/').get(getAllUsers);
router.route('/dashboard').get(getUserDashboardInfo)

module.exports = router;