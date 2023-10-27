const express = require('express');
const app = express();
const users = require('./routes/users')
const firms = require('./routes/firms')
const login = require('./routes/auth')
const program = require('./routes/program')
const authToken = require('./middlewares/auth')
const invoice = require('./routes/invoice')

// middleware

app.use(express.json())

// routes
app.use('/api/v1/users', users)
app.use('/api/v1/login', login)
app.use('/api/v1/firms', authToken, firms)

app.use('/api/v1/program', authToken, program)
app.use('/api/v1/invoice', authToken, invoice)


// api/v1/users - post // create a new user
// api/v1/firms - post // create a new firm

app.get('/', (req, res) => {
    res.send('Hello World')
})


app.listen(8888, () => {
    console.log('Server is running on port 8888');
});
