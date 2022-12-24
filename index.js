const dotenv = require('dotenv')
dotenv.config({path: './.env'})
const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/openapi', require('./routes/openaiRoutes'))

const PORT = process.env.PORT



app.listen(PORT, ()=> {
    console.log("Listening on Port:", PORT)
})