const express = require("express");
const app = express();
const port = 3000;
const expressLayout = require("express-ejs-layouts");

const pool = require("./14db.js");

app.set("view engine", "ejs");
app.use(expressLayout);
app.use(express.static(".")); // Agar ada foto
app.use(express.json()); // Untuk menangani JSON
app.use(express.urlencoded({ extended: true })); // Untuk menangani form-urlencoded

app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

// PostgreSQL - Tambah Kontak
app.post("/contact/add", async (req, res) => {
  const { name, mobile, email } = req.body;

  try {
    const newContact = await pool.query(
      `INSERT INTO contacts (name, mobile, email) VALUES ($1, $2, $3) RETURNING *`,
      [name, mobile, email]
    );
    res.status(200).send(`Kontak ${newContact.rows[0].name} telah ditambahkan`);
  } catch (error) {
    console.error("Gagal menambahkan kontak:", error);
    res.status(500).send("Gagal menambahkan kontak");
  }
});

// PostgreSQL - Tampilkan Semua Kontak
app.get("/contact", async (req, res) => {
  try {
    const contacts = await pool.query(`SELECT * FROM contacts ORDER BY name`);
    res.render("07contact02", {
      contacts: contacts.rows,
      layout: "layout/main",
      title: "Contact",
    });
  } catch (error) {
    console.error("Gagal memuat kontak:", error);
    res.status(500).send("Gagal memuat kontak");
  }
});

// PostgreSQL - Hapus Kontak
app.delete("/contact/delete/:name", async (req, res) => {
  const nameToDelete = req.params.name;

  try {
    const result = await pool.query(
      `DELETE FROM contacts WHERE name = $1 RETURNING *`,
      [nameToDelete]
    );

    if (result.rowCount > 0) {
      res.status(200).send(`Kontak ${nameToDelete} telah dihapus`);
    } else {
      res.status(404).send("Kontak tidak ditemukan");
    }
  } catch (error) {
    console.error("Gagal menghapus kontak:", error);
    res.status(500).send("Gagal menghapus kontak");
  }
});

// PostgreSQL - Perbarui Kontak
app.post("/contact/update", async (req, res) => {
  const { oldName, name, mobile, email } = req.body;

  try {
    const result = await pool.query(
      `UPDATE contacts SET name = $1, mobile = $2, email = $3 WHERE name = $4 RETURNING *`,
      [name, mobile, email, oldName]
    );

    if (result.rowCount > 0) {
      res.status(200).send(`Kontak ${name} telah diperbarui`);
    } else {
      res.status(404).send("Kontak tidak ditemukan");
    }
  } catch (error) {
    console.error("Gagal memperbarui kontak:", error);
    res.status(500).send("Gagal memperbarui kontak");
  }
});

app.get("/product/:prodID/category/:catID", (req, res) => {
  res.send(
    `Product ID: ${req.params.prodID} <br> Category ID: ${req.params.catID}`
  );
});

app.use("/", (req, res) => {
  res.status(404).send("Halaman tidak ditemukan 404");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
