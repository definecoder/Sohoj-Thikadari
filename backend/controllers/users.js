


const createUser = (req, res) => {
    res.json(req.body)
}

const getUser = (req, res) => {


    res.json({ email: req.params.email })
}


module.exports = {
    createUser,
    getUser
}