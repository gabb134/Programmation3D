const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'Labo1')))
app.use(express.static(path.join(__dirname, 'Théorie1')))

app.listen(3001, ()=>{console.log('listening on port 3001...')})