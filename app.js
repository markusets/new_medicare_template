//
var express = require("express");
var app = express();
var port = 5043;

//Middleware
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//ENV var
require("dotenv").config();

app.use("/static", express.static(__dirname + "/static"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/test", (req, res) => {
  res.sendFile(__dirname + "/views/pruebas.html");
});

app.get("/robots.txt", function (req, res) {
  res.type("text/plain");
  res.sendFile(__dirname + "/robots.txt");
});

//Server on
app.listen(port, () => {
  console.log("Server using port: " + port);
});
