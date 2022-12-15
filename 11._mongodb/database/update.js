import db from "./connection";

const { matchedCount } = await db.salesPeople.updateMany({ name: "Karl"}, { $set: { employeeOfTheMonth: false }}
);

console.log(matchedCount)