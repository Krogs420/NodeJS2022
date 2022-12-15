const express = require("express");
const app = express();

let currentId = 2;

const weaponsList = [
    {id: 1, name: "M4A1-S", class: "assault rifle", isFullAutomatic: true},
    {id: 2, name: "Blaser R93", class: "sniper rifle", isFullAutomatic: false},
    {id: 3, name: "Katana", class: "sword", isFullAutomatic: false},
    {id: 4, name: "AA-12", class: "shotgun", isFullAutomatic: true}
];

console.log(++currentId);
console.log(currentId);

// ============= GET ===============

app.get("/weapons", (req, res) => {
    res.send(weaponsList);
});

app.get("/weapons/:id", (req, res) => {
    const id = Number(req.params.id);
    const weapon = weaponsList.find((singleWeapon) => 
    singleWeapon.id === id);
    res.send(weapon);
});

// ============= POST ===============

app.post("/weapons", (req, res) => {
    const weapon = req.body;
    weapon.id = ++currentId;
    weapon.push(weapon);
    res.send({data: weapon});
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

// ============= PATCH ===============

app.patch("/weapons/:id", (req, res) => {
    const foundIndex = weapons.findIndex(weapon => weapon.id === Number(req.params.id));
    if(foundIndex !== -1) {
        const foundWeapon = weapons [foundIndex];
        const weaponToUpdate = { ...foundWeapon, ...req.body, id: Number(req.params.id) };
        weapons [foundIndex] = weaponToUpdate;
        res.send({data: weaponToUpdate});
    } else {
        res.status(404).send({data: undifined, message: `No weapon found by id: ${req.params.id}`});
    }
});

// ============= DELETE ===============


app.delete("/weapons/:id", (req, res) => {
    const foundIndex = weapons.findIndex(weapon => weapon.id === Number(req.params.id));
    
    if(foundIndex !== -1) {
        const deleteWeapons = weapons.splice(foundIndex, 1)[0];
        res.send({data: deleteWeapons});
    } else {
        res.status(404).send({data: undifined, message: `No weapon found by id: ${req.params.id}`});
    }

    //const weapon = findWeaponInList(req.params.id);
    //weaponsList.splice(weaponsList.findIndex(weapon), 1);
    //res.send({
        //weapons: weaponsList
    //});
});

app.listen(8080, () => {
    console.log("Server is running on port", 8080);
});