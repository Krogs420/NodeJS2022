import db from "./connection";

const { insertedId } = db.salesPeople.insertOne({ name: "Karl", salary: 9000 });

console.log(insertedId);