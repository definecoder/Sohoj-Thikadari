const express = require('express')
const router = express.Router()

const { createUser, getAllUsers } = require('../controllers/users')
router.route('/').post(createUser).get(getAllUsers);

module.exports = router;