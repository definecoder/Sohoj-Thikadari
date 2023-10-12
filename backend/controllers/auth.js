
const jwt = require('jsonwebtoken')

const login = async (req, res) => {

    // res.send('login page')

    const { email, password } = req.body


    if (!email || !password) {
        throw new Error('Please provide email and password')
    }

    //just for demo, normally provided by DB!!!!
    const id = new Date().getDate()
    // get user id from the data base using email and password

    // try to keep payload small, better experience for user
    // just for demo, in production use long, complex and unguessable string value!!!!!!!!!
    const token = jwt.sign({ id, email }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })

    res.status(200).json({ msg: 'user created', token })
}


module.exports = login