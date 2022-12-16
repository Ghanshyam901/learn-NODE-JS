// https://www.youtube.com/watch?v=VrQgmNY96wo&t=6122s

const express = require("express");
const path = require ('path');

const app = express(); // executeable
const publicPath = path.join(__dirname,'public');

// app.use(express.static(publicPath));
app.get('/',(req,res)=>{
    res.sendFile(`${publicPath}/home.html`)
})
app.get('/about',(req,res)=>{
    res.sendFile(`${publicPath}/about.html`)
})



app.get('*',(req,res)=>{   // 404 page 
    res.sendFile(`${publicPath}/pnf.html`)
})


app.listen(5000);