const express = require("express");
const app = express();

//Another way to import in a single line
//const app = require("express")();


//Route      //callback function
app.get("/", (request, response) => {
    response.send({message: "Created my first route. Check."});
});

app.get("/deers", (req, res) => {
    res.send({size: "BIG"});
});

app.get("/cups", (req, res) => {
    res.send({size: "Solid"});
});

app.get("/deers/:id", (req, res) => {
    //console.log(req.params)
    if (Number(req.params.id) === 1) {
        res.send({name: "Bambi", theBestAndOGDeer: true });
    } else {
        res.send({errorMessage: "I don't know that deer"});
    }
});

app.get("/actors", (req, res) => {
    console.log(req.query.name);
    res.send({
        message: "Information about the actor",
        ...req.query
    });
});

app.listen(8080, () => {
    console.log("Server is running on port", 8080);
});


// Ways to send data with GET
// this also works for all HTTP methods
// 1.
// path variables
// /deers/{id}

// 2.
// query parameters (query string)
// /deers?key=value&key2=value2