const dotenv = require("dotenv")
const mongoose = require('mongoose');
const express = require('express')
const app = express()
const {compile} =require('./Controllers/compilerControllers')
const bodyParser = require('body-parser')

dotenv.config({ path: './config.env' })
require('./db/conn')

app.use(express.json());

// we router
app.use(require('./route/auth'))

const PORT = process.env.PORT

app.use(bodyParser.urlencoded({ extended: false }))  //middlware
app.use(bodyParser.json()) // frist time call 

app.post('/compile', compile)

app.listen(PORT, ()=>{
    console.log(`Server started at port  ${PORT}`)
})