const express = require("express");
const app = express();
const path = require("path");

app.get("/download", (req, res, next) => {
  res.download(path.join(__dirname, "/resources/gato.jpg"));
});

app.get("/upload", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/resources/cat-kitty.gif"));
});

app.use((req, res, next) => {
  res.status(404).send("URL not found");
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

app.listen(3000, (req, res) => {
  console.log("App listening on port 3000!");
});