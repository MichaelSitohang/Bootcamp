const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const expressLayout = require("express-ejs-layouts");

app.set("view engine", "ejs");
app.use(expressLayout);
app.use(express.static(".")); // Agar ada foto
app.use(express.json()); // Untuk menangani JSON
app.use(express.urlencoded({ extended: true })); // Untuk menangani form-urlencoded

app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

app.get("/", (req, res) => {
  res.render("07index02", {
    layout: "layout/main",
    title: "Home",
  });
});

app.get("/about", (req, res) => {
  res.render("07about02", {
    layout: "layout/main",
    title: "About",
  });
});

app.get("/contact", (req, res) => {
  fs.readFile("data/jawaban5.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Tidak dapat memuat data");
    }
    const contacts = JSON.parse(data);

    // Urutkan kontak berdasarkan nama
    contacts.sort((a, b) => a.name.localeCompare(b.name));

    res.render("07contact02", {
      contacts,
      layout: "layout/main",
      title: "Contact",
    });
  });
});

// Rute untuk menambahkan kontak
app.post("/contact/add", (req, res) => {
  const { name, mobile, email } = req.body;

  fs.readFile("data/jawaban5.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Tidak dapat memuat data");
    }

    let contacts = JSON.parse(data);
    const newContact = { name, mobile, email };
    contacts.push(newContact); // Tambahkan kontak baru ke array

    fs.writeFile(
      "data/jawaban5.json",
      JSON.stringify(contacts, null, 2),
      (err) => {
        if (err) {
          return res.status(500).send("Tidak dapat menyimpan data");
        }
        res.status(200).send(`Kontak ${name} telah ditambahkan`);
      }
    );
  });
});

// Rute untuk menghapus kontak
app.delete("/contact/delete/:name", (req, res) => {
  const nameToDelete = req.params.name;

  fs.readFile("data/jawaban5.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Tidak dapat memuat data");
    }

    let contacts = JSON.parse(data);
    contacts = contacts.filter((contact) => contact.name !== nameToDelete);

    fs.writeFile(
      "data/jawaban5.json",
      JSON.stringify(contacts, null, 2),
      (err) => {
        if (err) {
          return res.status(500).send("Tidak dapat menyimpan data");
        }
        res.status(200).send(`Kontak ${nameToDelete} telah dihapus`);
      }
    );
  });
});

// Rute untuk memperbarui kontak
app.post("/contact/update", (req, res) => {
  const { oldName, name, mobile, email } = req.body;

  fs.readFile("data/jawaban5.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Tidak dapat memuat data");
    }

    let contacts = JSON.parse(data);
    const index = contacts.findIndex((contact) => contact.name === oldName);

    if (index !== -1) {
      // Perbarui data kontak
      contacts[index].name = name; // Perbarui nama
      contacts[index].mobile = mobile;
      contacts[index].email = email;

      fs.writeFile(
        "data/jawaban5.json",
        JSON.stringify(contacts, null, 2),
        (err) => {
          if (err) {
            return res.status(500).send("Tidak dapat menyimpan data");
          }
          res.status(200).send(`Kontak ${name} telah diperbarui`);
        }
      );
    } else {
      res.status(404).send("Kontak tidak ditemukan");
    }
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
