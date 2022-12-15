import db from "./connection.js";

const allShoes = await db.shoes.find().toArray();


const richSalesPeople = await db.salesPeople.find({ salery: { $gt: 2000 }}).toArray();

console.log(richSalesPeople);