const fs = require("fs");
const yargs = require("yargs");

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

// Command untuk menghapus kontak berdasarkan nama
yargs.command({
  command: "delete",
  describe: "Delete a contact by name",
  builder: {
    name: {
      describe: "contact name to delete",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    const { name } = argv;
    const contacts = readContactsFile();

    // Cari kontak berdasarkan nama menggunakan find
    const contactToDelete = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    // Jika kontak ditemukan, hapus kontak
    if (contactToDelete) {
      const updatedContacts = contacts.filter(
        (contact) => contact.name.toLowerCase() !== name.toLowerCase()
      );

      // Simpan kembali data yang sudah diperbarui
      writeContactsFile(updatedContacts);

      console.log(`Kontak dengan nama "${name}" telah dihapus.`);
      console.log("Daftar Kontak yang tersisa:");
      updatedContacts.forEach((contact, index) => {
        console.log(
          `${index + 1}. Nama: ${contact.name}, Email: ${
            contact.email || "N/A"
          }, Mobile: ${contact.mobile || "N/A"}`
        );
      });
    } else {
      console.log(`Kontak dengan nama "${name}" tidak ditemukan.`);
    }
  },
});

yargs.parse();
