//jshint esversion: 6

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
require('dotenv').config()

console.log(process.env);

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://usX.api.mailchimp.com/3.0/lists";

    https.request(url, options, function(response) {

    });

})

app.listen("3000", function() {
    console.log("Server is running on port 3000");
});