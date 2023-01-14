import express from "express";
const app = express();
import cors from "cors";
app.use(cors());


app.use(express.json());




app.get("/", (req, res) => {

    res.send();
});


const PORT = process.env.PORT || 8081;
app.listen(PORT, () => console.log("Server is running on port", PORT));