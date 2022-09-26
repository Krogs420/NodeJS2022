import express from "express";
const app = express();

import path from "path";

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/frontpage.html"));
});

app.get("/battle", (req, res) => {
    res.sendFile(path.resolve("public/battle/battle.html"));
});

app.get("/api/pokemon", (req, res) => {
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => response.json())
    .then(result => res.send({ data : result }));
});


console.log(undefined && 5);
console.log(5 && 10);

const PORT = process.env.PORT;

console.log(process.env.PORT);



const server = app.listen(8081, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});