const express = require('express')
const pool = require('../src/db/db')
require('dotenv').config()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Server is working')
})

app.listen(3000, () => {
    console.log('Server is running correctly')
})