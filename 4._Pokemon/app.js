import express from "express";
const app = express();

import path from "path";

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/frontpage.html"));
});

app.get("/pokemon", (req, res) => {
    res.send({ data: ["Slowpoke"] });
});

const pokemonList = [
    {name: "Onion Turtle", id: 1},
    {name: "Turtornator", id: 2},
    {name: "Dreepy", id: 3}
]

app.listen(8081, (error) => {
    console.log("Server is running on port", 8081);
});