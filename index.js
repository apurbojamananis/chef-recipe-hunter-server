const express = require("express");
const app = express();
const port = 3000;
var cors = require("cors");

const data = require("./data/data.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/data", (req, res) => {
  res.send(data);
});

app.get("/recipe/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = data.find((n) => n.id == id);
  res.send(selectedNews);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
