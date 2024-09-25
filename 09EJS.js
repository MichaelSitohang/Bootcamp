const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const fs = require("fs");
const { ifError } = require("assert");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, "07index.html"));
  const nama = "index";
  res.render("07index", { nama, title: "HOME" });
});

app.get("/about", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, "07about.html"));
  res.render("07about", { title: "About" }); //memanggil file ejs
});

app.get("/contact", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "07contact.html"));
  fs.readFile("data/jawaban5.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Tidak dapat memuat data");
    }
    const contacts = JSON.parse(data);

    res.render("07contact", { contacts, title: "contact" });
  });
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
