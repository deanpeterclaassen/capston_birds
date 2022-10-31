const express = require('express')
const cors = require('cors')
const {seed} = require('./seed')
require('dotenv').config()




const app = express()
app.use(express.static('public'))
app.use(express.json())
app.use(cors())




const port = process.env.PORT || 5678
app.listen(port, console.log(`Server running on ${port}`))