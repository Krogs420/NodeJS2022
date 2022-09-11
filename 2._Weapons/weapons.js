const express = require("express");
const app = express();

const weapons = [
    {id: 1, name: "M4A1-S", class: "assault rifle", isFullAutomatic: true},
    {id: 2, name: "Blaser R93", class: "sniper rifle", isFullAutomatic: false},
    {id: 3, name: "Katana", class: "sword", isFullAutomatic: false},
    {id: 4, name: "AA-12", class: "shotgun", isFullAutomatic: true}
];

app.get("/weapons", (req, res) => {
    res.send(weapons);
});

app.get("/weapons/:id", (req, res) => {
    const id = Number(req.params.id);
    const weapon = weapons.find((singleWeapon) => singleWeapon.id === id);
    res.send(weapon);
});


app.listen(8080, () => {
    console.log("Server is running on port", 8080);
});