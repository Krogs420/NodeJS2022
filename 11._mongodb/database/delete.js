import db from "./connection";

const { deleteCount } = await db.salesPeople.deleteOne({ name: "Karl"});

console.log(deleteCount);