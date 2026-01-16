const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/welcome", (req, res) => {
  res.send("Welcome to The Express API");
});

app.get("/*", (req, res) => {
  res.send("Nothing Over Here");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
