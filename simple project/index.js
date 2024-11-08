const express = require("express")
const app = express()
var users = [{
    name:"john", //john is the only client we support in the hospital now. 
    kidneys:[{
        healthy: false
    }]
}]

app.use(express.json());

//app.get --> how many kidney i have and how many is healthy.
app.get("/", function(req,res){
const johnkidneys = users[0].kidneys; //how many kidney user have
const numberOfKidneys = johnkidneys.length; //total number of kidneys
//this is for to get number of heathly kidney.
let numberOfHealthyKidneys = 0;
for (let i=0; i<johnkidneys.length; i++){ //this block of code be solve with help of filter method.
    if(johnkidneys[i].healthy){
        numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    }
}

const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;  // number of un heathly kidney.
res.json({
    //this will return to browerser
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys

})
})

// app.post --> user can add new kidney
app.post("/", function(req,res){
   const isHeathly = req.body.isHeathly; //take input
   users[0].kidneys.push({  //update the data here
        healthy: isHeathly
   })
   res.json({ //return output
    msg: "Done"
   })

})

//411
// app.put --> replace all kedney and make healthy
app.put("/", function(req,res){
    //make all unhealthy kidney to heathly
    for (let i = 0; i < users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

//411
// app.delete --> remove all unhealthy kidneys
app.delete("/", function(req,res){
    if(AtleastOneUnhealthyKidney()){
        const newKidneys = []; //create a new array
    for (let i = 0; i < users[0].kidneys.length; i++){ // iterate all kidneys
       if( users[0].kidneys[i].healthy ){ //if user kidney is healthy then push to new array newkidney else, nothing to do 
        newKidneys.push({  // so here in this we have just take all healthy kidney data and update with push to new array by this unhealthy kidney is deleted.
            healthy: true
        })
       }
    }
    users[0].kidneys = newKidneys;
    res.json({msg: "Done"});
    } else{
        res.status(411).json({
            msg:"You have no bad"
        });
    }

    
})

//function to check the unhealthy kidney
function AtleastOneUnhealthyKidney() {
    let atleastOneUnhealthyKidney = false;
    for(let i=0; i<users[0].kidneys.length; i++){
        if(!users[0].kidneys.healthy){
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney
}

app.listen(3000);