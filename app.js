//jshint esversion: 6

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
    console.log(req.body.firstName);
    console.log(req.body.lastName);
    console.log(req.body.email);
})

app.listen("3000", function() {
    console.log("Server is running on port 3000");
})
