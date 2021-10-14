const express = require("express");

//how to make a simple server through a factory func
//npm manipulates package.json
const app = express();

//funtion that enables us to apply a middleware
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(8080);
