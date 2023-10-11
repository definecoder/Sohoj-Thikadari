const express = require('express')
const router = express.Router()

const { createUser, getUser } = require('../controllers/users')

router.route('/').post(createUser)
router.route('/:email').get(getUser) // maybe, let me see if I can do it with ID

module.exports = router;