const express = require('express');
const app = express();
const users = require('./routes/users')

// middleware

app.use(express.json())

// routes
app.use('/api/v1/users', users)

// api/v1/users - post // create a new user
// api/v1/firms - post // create a new firm

app.get('/', (req, res) => {
    res.send('Hello World')
})


app.listen(8888, () => {
    console.log('Server is running on port 8888');
});
