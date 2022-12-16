// https://www.youtube.com/watch?v=VrQgmNY96wo&t=6122s

const express = require("express");
const app = express(); // executeable

app.get("/", (req, res) => {
  res.send("hello express js...... home page");
});

app.get("/about", (req, res) => {
  res.send("hello express js...... about page");
});

app.get("/carrier", (req, res) => {
    res.send("hello express js...... carrier page");
  });

app.listen(5000);