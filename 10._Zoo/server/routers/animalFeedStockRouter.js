import { Router } from "express";
const router = Router();
import db from "../database/connection_mysql.js";


router.get("/animalfeedtypes", async (req, res) => {
    const [rows, fields] = await db.query("SELECT * FROM animal_feed_types;");
    console.log(rows);
    res.send({ data: rows });
});

router.post("/animalfeedstock/:stockTypeId", (req, res) => {
    const { initialAmount, remainingAmount, stockTypeId } = req.body;

    console.log(initialAmount);

    if (!animalStockTypeId) return res.status(400).send({ message: "Missing the key initialAmount"});
    if (!initialAmount) return res.status(400).send({ message: "Missing the key initialAmount"});

    const remainingAmountDefault = remainingAmount || initialAmount;
    /* const data = await db.query("INSERT INTO animal_feed_stock (initial_amount, remaining_amount, animal_feed_type_id) VALUES (?, ?. ?)",
    initial) */
    res.send({})
})
export default router;