const yargs = require("yargs");
const fs = require("fs");

// Nama file JSON yang akan digunakan
const filePath = "data/jawaban5.json";

// Fungsi untuk membaca file JSON
const readContactsFile = () => {
  try {
    const file = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(file);
  } catch (err) {
    if (err.code === "ENOENT") {
      // Jika file tidak ditemukan, kembalikan array kosong
      return [];
    } else {
      console.error("Gagal membaca file", err);
      return [];
    }
  }
};

// Fungsi untuk menyimpan data kembali ke file JSON
const writeContactsFile = (contacts) => {
  fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2));
};

// Definisi command untuk menambahkan contact baru
yargs.command({
  command: "add",
  describe: "Add new contact",
  builder: {
    nama: {
      describe: "Contact name",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "Contact email",
      demandOption: false,
      type: "string",
    },
    mobile: {
      describe: "Contact mobile phone number",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    const { nama, email, mobile } = argv;

    // Membuat objek contact berdasarkan input dari yargs
    const contact = { name: nama, email, mobile };

    // Membaca file JSON jika sudah ada
    const contacts = readContactsFile();

    // Menambahkan contact baru ke array
    contacts.push(contact);

    // Menyimpan kembali ke file JSON
    writeContactsFile(contacts);

    console.log("Data telah berhasil disimpan ke contacts.json");
  },
});

// Parse perintah yang diberikan di CLI
yargs.parse();
