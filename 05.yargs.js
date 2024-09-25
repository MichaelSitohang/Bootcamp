const yargs = require("yargs");
const fs = require("fs");
const validator = require("validator"); // Import validator package

console.log(yargs.argv);

// Definisi command untuk menambahkan contact baru
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
      const file = fs.readFileSync("data/jawaban5.json", "utf-8");
      const contacts = JSON.parse(file);

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
      fs.writeFileSync("data/jawaban5.json", JSON.stringify(contacts, null, 2));
      console.log("Data telah berhasil disimpan ke jawaban5.json");
    } catch (err) {
      console.error("Gagal membaca/menulis file", err);
    }
  },
});

yargs.parse();
