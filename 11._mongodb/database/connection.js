import { MongoClient } from "mongodb";

// 27017
const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);

await client.connect(); //Prøver at forbinde

const shoesDB = client.db("shoes");

/* const shoes = shoesDB.collection("shoes");
const salesPeople = shoesDB.collection("salesPeople"); */

export default { // Her bliver det kørt inline
    shoes: shoesDB.collection("shoes"),
    salesPeople: shoesDB.collection("salesPeople")
}