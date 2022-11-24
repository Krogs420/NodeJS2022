import express from "express";
const app = express();

import cors from "cors";
app.use(cors());

const animals = ["🦩", "🐶", "🦍", "🦄", "🦚"]

app.get("/api/animals", (req, res) => {
    res.send({ data: animals });
});

//import path from "path";
//app.use(express.static(path.resolve("../client/dist")));

import animalsRouter from "./routers/animalsRouter.js";
app.use(animalsRouter);
import animalFeedTypesRouter from "./routers/animalFeedTypesRouter.js";
app.use(animalFeedTypesRouter);
import animalFeedStockRouter from "./routers/animalFeedStockRouter.js";
app.use(animalFeedStockRouter);

app.get("/api/test", (req,res) => {
    res.send({ message: "You found me" });
});


const PORT = process.env.PORT || 8081;
app.listen(PORT, () => console.log("Server is running on port", PORT));