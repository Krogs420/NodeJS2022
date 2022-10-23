import express from "express";
const app = express();

app.use(express.static("public"));

import { injectData, renderPage } from "./util/templateEngine.js";

const frontpagePage = renderPage("/frontpage/frontpage.html", 
{ 
    tabTitle: "Frontpage", 
    cssLink: `<link rel="stylesheet" href="/pages/main.css">` 
});

const loginPage = renderPage("/login/login.html",
{
    tabTitle: "Login",
    cssLink: `<link rel="stylesheet" href="/pages/main.css"`
});

const admin = renderPage("/admin/admin.html",
{
    tabTitle: "Admin",
    cssLink: `<link rel="stylesheet" href="/pages/main.css"`
});

const ses1Page = renderPage("/session1/session1.html", 
{
    tabTitle: "Week 1",
    cssLink: `<link rel="stylesheet" href="/pages/main.css"`
});

const ses2Page = renderPage("/session2/session2.html",
{
    tabTitle: "Week 2",
    cssLink: `<link rel="stylesheet" href="/pages/main.css"`
});

const ses3Page = renderPage("/session3/session3.html",
{
    tabTitle: "Week 3",
    cssLink: `<link rel="stylesheet" href="/pages/main.css"`
});

const ses4Page = renderPage("/session4/session4.html",
{
    tabTitle: "Week 4",
    cssLink: `<link rel="stylesheet" href="/pages/main.css"`
});

const ses5Page = renderPage("/session5/session5.html",
{
    tabTitle: "Week 5",
    cssLink: `<link rel="stylesheet" href="/pages/main.css"`
});

const ses6Page = renderPage("/session6/session6.html",
{
    tabTitle: "Week 6",
    cssLink: `<link rel="stylesheet" href="/pages/main.css"`
});

const ses7Page = renderPage("/session7/session7.html",
{
    tabTitle: "Week 7",
    cssLink: `<link rel="stylesheet" href="/pages/main.css"`
});


app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/login", (req, res) => {
    res.send(loginPage);
});

app.get("/admin", (req, res) => {
    res.send(admin);
});

app.get("/session1", (req, res) => {
    res.send(ses1Page);
});

app.get("/session2", (req, res) => {
    res.send(ses2Page);
});

app.get("/session3", (req, res) => {
    res.send(ses3Page);
});

app.get("/session4", (req, res) => {
    res.send(ses4Page);
});

app.get("/session5", (req, res) => {
    res.send(ses5Page);
});

app.get("/session6", (req, res) => {
    res.send(ses6Page);
});

app.get("/session7", (req, res) => {
    res.send(ses7Page);
});



const PORT = process.env.PORT || 8081;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});