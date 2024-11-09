const express = require('express')
const app = express()
const port = 3001

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
    res.send(ans.toString());
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})