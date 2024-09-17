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

// Command untuk memperbarui kontak berdasarkan oldname
yargs.command({
  command: "update",
  describe: "Update a contact by old name",
  builder: {
    oldname: {
      describe: "The old contact name to update",
      demandOption: true,
      type: "string",
    },
    newname: {
      describe: "The new name for the contact",
      demandOption: true,
      type: "string",
    },
    newemail: {
      describe: "The new email for the contact",
      demandOption: false,
      type: "string",
    },
    newmobile: {
      describe: "The new mobile phone number for the contact",
      demandOption: false,
      type: "string",
    },
  },
  handler(argv) {
    const { oldname, newname, newemail, newmobile } = argv;
    const contacts = readContactsFile();

    // Cari kontak berdasarkan nama lama menggunakan find
    const contactToUpdate = contacts.find(
      (contact) => contact.name.toLowerCase() === oldname.toLowerCase()
    );

    // Jika kontak ditemukan, lakukan update
    if (contactToUpdate) {
      // Perbarui nama, email, dan nomor telepon
      contactToUpdate.name = newname;
      if (newemail) {
        contactToUpdate.email = newemail;
      }
      if (newmobile) {
        contactToUpdate.mobile = newmobile;
      }

      // Simpan kembali data yang telah diperbarui
      writeContactsFile(contacts);

      console.log(`Kontak dengan nama "${oldname}" telah diperbarui.`);
      console.log("Detail Kontak yang diperbarui:");
      console.log(
        `Nama: ${contactToUpdate.name}, Email: ${
          contactToUpdate.email || "N/A"
        }, Mobile: ${contactToUpdate.mobile || "N/A"}`
      );
    } else {
      console.log(`Kontak dengan nama "${oldname}" tidak ditemukan.`);
    }
  },
});

yargs.parse();
