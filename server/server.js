const express = require('express')
const cors = require('cors')
const {seed} = require('./seed')
const { addBird, getBirds } = require('./controller')
require('dotenv').config()




const app = express()
app.use(express.static('public'))
app.use(express.json())
app.use(cors())


app.post('/seed', seed)
app.post('/bird', addBird)

app.get('/bird',getBirds)



const port = process.env.PORT || 5678
app.listen(port, console.log(`Server running on ${port}`))