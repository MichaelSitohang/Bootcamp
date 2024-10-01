const express = require("express");
const app = express();
const port = 3000;
const expressLayout = require("express-ejs-layouts");
const validator = require("validator");
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

// Fungsi validasi email
function validateEmail(email) {
  return validator.isEmail(email);
}

// Fungsi validasi nomor telepon
function validateMobile(mobile) {
  const mobileRegex = /^[0-9]{10,15}$/;
  return mobileRegex.test(mobile);
}

//untuk menampilkan halaman index
app.get("/", (req, res) => {
  res.render("07index02", {
    layout: "layout/main",
    title: "Home",
  });
});

//untuk menampilkan halaman about
app.get("/about", (req, res) => {
  res.render("07about02", {
    layout: "layout/main",
    title: "About",
  });
});

// untuk menampilkan halaman contact
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

// PostgreSQL - Tambah Kontak
app.post("/contact/add", async (req, res) => {
  const { name, mobile, email } = req.body;

  // Validasi: Cek apakah nama diisi
  if (!name || name.trim() === "") {
    return res.status(400).send("Nama harus diisi");
  }

  // Validasi email dan nomor telepon
  if (!validateEmail(email)) {
    return res.status(400).send("Email tidak valid");
  }

  if (!validateMobile(mobile)) {
    return res.status(400).send("Nomor telepon tidak valid");
  }

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

  // Validasi: Cek apakah nama baru diisi
  if (!name || name.trim() === "") {
    return res.status(400).send("Nama harus diisi");
  }

  // Validasi email dan nomor telepon
  if (!validateEmail(email)) {
    return res.status(400).send("Email tidak valid");
  }

  if (!validateMobile(mobile)) {
    return res.status(400).send("Nomor telepon tidak valid");
  }

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
