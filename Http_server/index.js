const express = require('express')
const bodyParser = require("body-parser")
const port = 4000
const app = express()

app.use(bodyParser.json({}))
app.post('/', function(req, res){
    console.log(req.body)
    //console.log(req.headers)
    res.send("Hello 2")
})

app.post('/con', function(req, res){
    const message = req.body.message
    console.log(message)
    //console.log(req.headers)
    res.json({
        output: "2 + 2 = 4"
    })
})
app.listen(port)
