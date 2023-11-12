const express = require('express');
const cors = require('cors');
const app = express();
const users = require('./routes/users')
const firms = require('./routes/firms')
const auth = require('./routes/auth')
const program = require('./routes/program')
const authToken = require('./middlewares/auth')
const invoice = require('./routes/invoice')
const bills = require('./routes/bills')

// middleware

app.use(express.json())
app.use(cors());

// routes
app.use('/api/v1/auth', auth)

app.use('/api/v1/users', authToken, users)

app.use('/api/v1/firms', authToken, firms)

app.use('/api/v1/program', authToken, program)
app.use('/api/v1/invoice', authToken, invoice)
app.use('/api/v1/bills', authToken, bills)


// api/v1/users - post // create a new user
// api/v1/firms - post // create a new firm

app.get('/', (req, res) => {
    res.send('Hello World')
})


app.listen(8888, () => {
    console.log('Server is running on port 8888');
});
