const express=require('express')
const app=express();
app.get('/',function(req,res){
    res.send("Welcome to my hotel")
})

app.get('/chicken', function(req,res){
    res.send("Chicken will be ordered")
})


app.listen(3000,()=>{
    console.log("Loading port 3000")
})