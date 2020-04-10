const express = require("express");
const app = express();
const port = 3000;

const admin = (req, res) => {
  return res.send("Admin Dashboard page");
};

const isAdmin = (req, res, next) => {
  console.log("isAdmin is running...");
  next();
};
const isLoggedIn = (req, res, next) => {
  console.log("You are logged in...");
  next();
};

app.get("/", (req, res) => res.send("Home Page"));

app.get("/admin", isLoggedIn, isAdmin, admin);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
