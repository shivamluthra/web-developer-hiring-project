const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT || 3000

// ROUTES FOR API
const router = express.Router()



// REGISTER ROUTES
app.use('/api', router)

// START THE SERVER
app.listen(port, async () => {
    await orm.connect()
    console.log('ORM started')
    orm.loadModels()
    console.log('Models loaded')
    console.log('Server running at port ' + port)
})
