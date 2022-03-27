const express = require('express')
require('./models/index')
const app = express()
const PORT = 8000

app.get('/', (req, res) => {
    res.send("Application working")
})

app.listen(PORT, () => {
    console.log(`Application is hosting over port: ${PORT}`)
})
