
const { pool } = require('../database/database')

const createUser = async (req, res) => {

    try {

        const { username, phone, email, password } = req.body

        let sql = `
            INSERT INTO user (username, phone, email, password)
            VALUES("${username}", "${phone}", "${email}", "${password}")
        `;
        await pool.query(sql);
        res.status(200).send('user added successfully')
    }
    catch (err) {
        res.status(500).json({ msg: err })
    }

}

const getUser = (req, res) => {


    res.json({ email: req.params.email })
}


module.exports = {
    createUser,
    getUser
}