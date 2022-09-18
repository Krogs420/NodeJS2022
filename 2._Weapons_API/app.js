import express from "express";
const app = express();

app.use(express.json());

const weapons = [
    {name: "AK-472"},
    {name: "Knife"}
];

app.listen(8080, () => console.log("You are not alone, something is lsitening on prot", 8080));