const express = require('express');
const app = express();
const users = require('./routes/users')
const firms = require('./routes/firms')
const login = require('./routes/auth')

// middleware

app.use(express.json())

// routes
app.use('/api/v1/users', users)
app.use('/api/v1/firms', firms)
app.use('/login', login)


// api/v1/users - post // create a new user
// api/v1/firms - post // create a new firm

app.get('/', (req, res) => {
    res.send('Hello World')
})


app.listen(8888, () => {
    console.log('Server is running on port 8888');
});
