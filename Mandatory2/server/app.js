import express from "express";
const app = express();
import cors from "cors";
app.use(cors());

// ------------------ Session ------------------ 
import session from "express-session";
app.use(session({
  secret: process.env.SESSION_SECRET || "Naruto",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } //false we are not using https, but http
}));


app.use(express.json());

import usersRouter from "./routers/UsersRouter.js";
app.use(usersRouter);

app.get("/", (req, res) => {
    
    res.send();
});

import mailRouter from "./routers/MailRouter.js";
app.use(mailRouter);


const PORT = process.env.PORT || 8081;
app.listen(PORT, () => console.log("Server is running on port", PORT));