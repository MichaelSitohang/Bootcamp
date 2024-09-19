const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "07index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "07about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.resolve(__dirname, "07contact.html"));
});

app.get("/product/:prodID/category/:catID", (req, res) => {
  res.send(
    `product id ${req.params.prodID} <br> categoryID ${req.params.catID}`
  );
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("Halaman tidak ditemukan 404");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
