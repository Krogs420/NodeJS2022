const express = require("express");
const app = express();

const weaponsList = [
    {id: 1, name: "M4A1-S", class: "assault rifle", isFullAutomatic: true},
    {id: 2, name: "Blaser R93", class: "sniper rifle", isFullAutomatic: false},
    {id: 3, name: "Katana", class: "sword", isFullAutomatic: false},
    {id: 4, name: "AA-12", class: "shotgun", isFullAutomatic: true}
];

// ============= GET ===============

app.get("/weapons", (req, res) => {
    res.send(weaponsList);
});

app.get("/weapons/:id", (req, res) => {
    const id = Number(req.params.id);
    const weapon = weaponsList.find((singleWeapon) => singleWeapon.id === id);
    res.send(weapon);
});

// ============= POST ===============

app.post("/weapons", (req, res) => {
    weaponsList.push(req.body);
    res.send({
        weapons: weaponsList
    });
});

// ============= PUT ===============

app.put("/weapons/:id", (req, res) => {
    const weapon = findWeaponInList(req.params.id);

    if(weapon !== undefined){
        weaponsList[weaponsList.indexOf(weapon)] = req.body;
    };

    res.send({
        weapons: weaponsList
    });
});

// ============= DELETE ===============

app.delete("/weapons/:id", (req, res) => {
    const weapon = findWeaponInList(req.params.id);
    weaponsList.splice(weaponsList.indexOf(weapon), 1);
    res.send({
        weapons: weaponsList
    });
});

app.listen(8080, () => {
    console.log("Server is running on port", 8080);
});