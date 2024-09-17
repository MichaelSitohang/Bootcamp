const yargs = require("yargs");
const fs = require("fs");
const validator = require("validator"); // Import validator package

console.log(yargs.argv);

// Fungsi untuk membaca file JSON
const readContactsFile = () => {
  try {
    const file = fs.readFileSync("data/jawaban5.json", "utf-8");
    return JSON.parse(file);
  } catch (err) {
    console.error("Gagal membaca file", err);
    return [];
  }
};

// Fungsi untuk menyimpan data kembali ke file JSON
const writeContactsFile = (contacts) => {
  fs.writeFileSync("data/jawaban5.json", JSON.stringify(contacts, null, 2));
};

// Command untuk menambahkan contact baru
yargs.command({
  command: "add",
  describe: "add new contact",
  builder: {
    name: {
      describe: "contact name",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "contact email",
      demandOption: false,
      type: "string",
    },
    mobile: {
      describe: "contact mobile phone number",
      demandOption: false, // Set mobile to not required, it can be null
      type: "string",
    },
  },
  handler(argv) {
    const { name, email, mobile } = argv;

    // Jika email tidak diisi, atur ke null
    const emailValidated = email
      ? validator.isEmail(email)
        ? email
        : null
      : null;

    // Jika nomor telepon tidak diisi, atur ke null
    const mobileValidated = mobile
      ? validator.isMobilePhone(mobile, "id-ID")
        ? mobile
        : null
      : null;

    // Membuat objek contact berdasarkan input dari yargs
    const contact = { name, mobile: mobileValidated, email: emailValidated };

    try {
      // Membaca file JSON jika sudah ada
      const contacts = readContactsFile();

      // Cek apakah nama sudah ada di contacts
      const duplicateName = contacts.find((c) => c.name === name);
      if (duplicateName) {
        console.log(`Nama "${name}" sudah ada!`);
        return;
      }

      // Cek apakah email sudah ada di contacts (hanya jika email tidak null)
      if (emailValidated) {
        const duplicateEmail = contacts.find((c) => c.email === emailValidated);
        if (duplicateEmail) {
          console.log(`Email "${emailValidated}" sudah ada!`);
          return;
        }
      }

      // Menambahkan contact baru ke array
      contacts.push(contact);

      // Menyimpan kembali ke file JSON
      writeContactsFile(contacts);
      console.log("Data telah berhasil disimpan ke jawaban5.json");
    } catch (err) {
      console.error("Gagal membaca/menulis file", err);
    }
  },
});

// Command untuk menampilkan daftar semua kontak
yargs.command({
  command: "list",
  describe: "List all contacts",
  handler() {
    const contacts = readContactsFile();
    console.log("Daftar Kontak:");
    contacts.forEach((contact, index) => {
      console.log(
        `${index + 1}. Nama: ${contact.name}, Email: ${
          contact.email || "N/A"
        }, Mobile: ${contact.mobile || "N/A"}`
      );
    });
  },
});

// Command untuk menampilkan detail kontak berdasarkan nama
yargs.command({
  command: "detail",
  describe: "Show details of a contact",
  builder: {
    name: {
      describe: "contact name",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    const { name } = argv;
    const contacts = readContactsFile();
    const contact = contacts.find(
      (c) => c.name.toLowerCase() === name.toLowerCase()
    );

    if (contact) {
      console.log("Detail Kontak:");
      console.log(`Nama: ${contact.name}`);
      console.log(`Email: ${contact.email || "N/A"}`);
      console.log(`Mobile: ${contact.mobile || "N/A"}`);
    } else {
      console.log(`Kontak dengan nama "${name}" tidak ditemukan.`);
    }
  },
});

yargs.parse();
