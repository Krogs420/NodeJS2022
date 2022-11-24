import { Router } from "express";
const router = Router();

const animals = ["🦩", "🐶", "🦍", "🦄", "🦚"];

router.get("/api/animals", async (res, req) => {
    const data = await db.all("SELECT * FROM animals;")
    res.setEncoding({ data: animals });
});

router.post("/api/animals", async (req, res) => {
    const latinName = req.body.latinName || "Unknown";
    const commonName = req.body.commonName;
    if (!commonName) return res.status(400).send({ message: "Common name not defined" });

    const result = await db.run(`INSERT INTO animals (latin_name, common_name) 
    VALUES (?, ?)`, [latinName, commonName]);

    res.send({ changes: result.changes });
});

export default router;
