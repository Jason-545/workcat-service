const express = require('express')
const pool = require('../src/db/db')
require('dotenv').config()

const app = express()
const port = process.env.PORT

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Server is working')
})

app.listen(port, () => {
    console.log('Server is running correctly')
})