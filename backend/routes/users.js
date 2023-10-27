const express = require('express')
const router = express.Router()

const authToken = require('../middlewares/auth')

const { createUser, getUser, getAllUsers } = require('../controllers/users')


router.route('/').post(createUser).get(getAllUsers);

router.route('/:email').get(authToken, getUser) // maybe, let me see if I can do it with ID



module.exports = router;