const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const fs = require("fs");
const expressLayout = require("express-ejs-layouts");
const { ifError } = require("assert");

app.set("view engine", "ejs");

// app.set("views", "layout");

app.use(expressLayout);

app.get("/", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, "07index.html"));
  const nama = "index";
  res.render("07index02", {
    nama,
    layout: "layout/main",
    title: "Home",
  });
});

app.get("/about", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, "07about.html"));
  res.render("07about02", {
    layout: "layout/main",
    title: "About",
  }); //memanggil file ejs
});

app.get("/contact", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "07contact.html"));
  fs.readFile("data/jawaban5.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Tidak dapat memuat data");
    }
    const contacts = JSON.parse(data);

    res.render("07contact02", {
      contacts,
      layout: "layout/main",
      title: "Contact",
    });
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
