const { pool } = require('../database/database')

const createFirm = async (req, res) => {
    try {

        const { reg_no, name, proprietor, nominee, phone, email, trade_license, uid } = req.body


        let sql = `
            INSERT INTO firm (reg_no, name, proprietor, nominee, phone, email, trade_license, uid)
            VALUES("${reg_no}", "${name}", "${proprietor}", "${nominee}", "${phone}", "${email}", "${trade_license}", "${uid}")
        `;

        await pool.query(sql);

        res.status(200).send('firm added successfully')
    }
    catch (err) {
        res.json({ msg: "Error adding firm in the database: " + err })
    }
}


module.exports = { createFirm }