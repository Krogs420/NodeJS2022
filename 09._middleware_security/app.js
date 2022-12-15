import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();

import helmet from "helmet";
app.use(helmet());

import session from "express-session";
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));

import rateLimit from 'express-rate-limit'

const frontdoorLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 6, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use("/frontdoor", frontdoorLimiter);

/* Middleware functions */
function ipLogger(req, res, next) {
    console.log(req.ip);
    next();
}

function guildingButler(req, res, next) {
    console.log("This way, sir");
    next();
}


/* Setup middleware */
// app.use(ipLogger);                    Udkommenteret fordi den logger for meget og giver lidt stress :)
app.use("/room", guildingButler);

import popcornRouter from "./routers/popcornRouter.js";
app.use(popcornRouter);

 /* Middleware task med conditional logic som kan tjekke for hvilket navn der kommer ind på siden */ 
function guardMiddleware(req, res, next) {
    if (req.query.name !== "Anders") {
        res.send({ message: "You are not Anders, Go away you mofo" })
    }

    req.fullname = "Anders Latif";
    next();
}

app.get("/frontdoor", guardMiddleware, (req, res) => {
    res.send({ message: `Please enter, ${req.fullname}` });
});

//-------------------------------------------------------------------------------
app.get("/room", guildingButler, (req, res, next) => {
    console.log("Room 1");
    next();
    //res.send({ message: "You are in room 1" });
});

app.get("/room", guildingButler, (req, res, next) => {
    console.log("Room 2")
    res.send({ message: "You are in room 2" });
});



// Sender en "page not found" error hvis der skrives noget i url som ikke har et endpoint
app.get("*", (req, res) => {
    res.send("<h1>Error 404</h1><br><h3>Page not found</h3>")
});

//----------------------------- LOCAL SERVER PORT ------------------------------

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => console.log("Server is running on port", PORT));

/* const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("server is running on port", server.address().port);
}); */

