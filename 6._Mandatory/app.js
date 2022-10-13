import express from "express";
const app = express();

app.use(express.static("public"));

import { injectData, renderPage } from "./util/templateEngine.js";

const frontpagePage = renderPage("/frontpage/frontpage.html", 
{ 
    tabTitle: "Frontpage", 
    cssLink: `<link rel="stylesheet" href="/pages/main.css">` 
});

const loginPage = renderPage("/login/login.html");
const ses1Page = renderPage("/session1/session1.html");
const ses2Page = renderPage("/session2/session2.html");
const ses3Page = renderPage("/session3/session3.html");
const ses4Page = renderPage("/session4/session4.html");
const ses5Page = renderPage("/session5/session5.html");
const ses6Page = renderPage("/session6/session6.html");
const ses7Page = renderPage("/session7/session7.html");


/* const battlePage = renderPage("/battle/battle.html", {
    cssLink: `<link rel="stylesheet" href="/pages/battle/battle.css">`
}); */

app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/login", (req, res) => {
    res.send(loginPage);
});

app.get("/session1", (req, res) => {
    res.send(ses1Page);
});

app.get("/session2", (req, res) => {
    res.send(ses1Page);
});

app.get("/session3", (req, res) => {
    res.send(ses1Page);
});

app.get("/session4", (req, res) => {
    res.send(ses1Page);
});

app.get("/session5", (req, res) => {
    res.send(ses1Page);
});

app.get("/session6", (req, res) => {
    res.send(ses1Page);
});

app.get("/session7", (req, res) => {
    res.send(ses1Page);
});



const PORT = process.env.PORT || 8081;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});