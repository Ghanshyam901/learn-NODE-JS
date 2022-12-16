// https://www.youtube.com/watch?v=VrQgmNY96wo&t=6122s

const express = require("express");
const path = require ('path');

const app = express(); // executeable
const publicPath = path.join(__dirname,'public');

app.use(express.static(publicPath));


app.listen(5000);