const express = require('express')
const cors = require('cors')
const {seed} = require('./seed')
const { addBird, getBirds, addList, getWishBirds, markBirdAsSeen, deleteBird, countBirds,
getHtml, getCss, getJS } = require('./controller')
require('dotenv').config()




const app = express()
app.use(express.static('public'))
app.use(express.json())
app.use(cors())

app.get('/', getHtml)
app.get('/css', getCss)
app.get('/js', getJS)


app.post('/seed', seed)
app.post('/bird', addBird)

app.get('/bird',getBirds)

app.post('/wish',addList)
app.get('/wish', getWishBirds)

app.put('/bird/seen',markBirdAsSeen)
app.put('/bird/delete', deleteBird)

app.get('/count', countBirds)

const port = process.env.PORT || 5678
app.listen(port, console.log(`Server running on ${port}`))