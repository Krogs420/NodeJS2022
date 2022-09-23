import express from "express";
const app = express();

import path from "path";

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/frontpage.html"));
});




app.listen(8081, (error) => {
    console.log("Server is running on port", 8081);
});