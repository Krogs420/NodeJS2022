const express = require("express");
import express from "express";
const app = express();

app.use(express.static("public"));

import path from "path"


//Cant do this ever ... must read as a file
//import packageJSON from "./pageage.json"
//console.log(packageJSON)
//console.log(require("./package.json"));

const { incrementVisitorCounter } = require("./geocitiesUtil.js");

app.get("/", (req, res) => {
    console.log("Visitors since the server started", incrementVisitorCounter());
    //Cant use __dirname as it only works in common js
    //res.sendFile(__dirname + "/public/frontpage/frontpage.html");
    res.sendFile(path.resolve("./public/frontpage/frontpage.html"));
})

app.listen(8080, () => console.log("Server is running on port", 8080));
