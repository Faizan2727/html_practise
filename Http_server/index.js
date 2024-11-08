// const express = require('express')
// const bodyParser = require("body-parser")
// const port = 4000
// const app = express()
// console.log(app)//see which function express support 

// app.use(bodyParser.json({}))
// app.post('/', function(req, res){
//     console.log(req.body)
//     //console.log(req.headers)
//     res.send("Hello 2")
// })

// app.post('/con', function(req, res){
//     const message = req.body.message
//     console.log(message)
//     //console.log(req.headers)
//     res.json({
//         output: "2 + 2 = 4"
//     })
// })

// app.post('/q', function(req, res){
//     const message = req.query.message
//     console.log(message)
//     //console.log(req.headers)
//     res.json({
//         output: "2 + 2 = 4"
//     })
// })
// app.listen(port)

const express = require('express')
const app = express()
const port = 3000

function calculateSum(n){
    let ans = 0;
    for(let i = 1; i<n; i++){
        ans = ans + i;
    }
    return ans;
}

app.get('/con', (req, res) => {
    const n = req.query.n;
    const ans = calculateSum(n)
    res.send("your answer is " + ans.toString());
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})