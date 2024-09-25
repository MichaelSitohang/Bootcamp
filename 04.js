const validator = require("validator");
const fs = require("fs");
const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");
const rl = readline.createInterface({ input, output });

// Fungsi untuk menambahkan data
function addData() {
  rl.question("Siapa nama kamu ? ", (nama) => {
    rl.question("berapa nomor hp kamu?", (nomorhp) => {
      rl.question("apa alamat email kamu?", (email) => {
        if (!validator.isMobilePhone(nomorhp)) {
          console.log("Format nomor telepon anda salah");
          rl.close();
          return;
        }
        if (!validator.isEmail(email)) {
          console.log("Format Email anda salah");
          rl.close();
          return;
        }

        const result = { nama, nomorhp, email };
        saveData(result);
        rl.close();
      });
    });
  });
}

// Fungsi untuk menyimpan data ke file
function saveData(result) {
  try {
    const file = fs.readFileSync("data/jawaban.json", "utf-8");
    const contact = JSON.parse(file);
    contact.push(result);

    fs.writeFileSync("data/jawaban.json", JSON.stringify(contact, null, 2));
    console.log("Data telah berhasil disimpan ke jawaban.json");
  } catch (err) {
    console.error("Gagal menyimpan data", err);
  }
}

// Memulai proses input data
addData();
