const express = require("express");
const myLog = require("./lib/md-lib").myLog;
const app = express();

app.use('/log', myLog);

app.get("/", function(req, res, next){
  res.send('Hello World');
});

app.get("/log", function(req, res, next){
  res.send('Hello World');
});

const server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});