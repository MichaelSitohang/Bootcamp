const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");
const { writeFileSync, readFileSync } = require("node:fs");
const rl = readline.createInterface({ input, output });

const val = require("validator");

rl.question("Sebutkan Nama Kamu", (nama) => {
  rl.question("Sebutkan Nomor HP Kamu", (nomorhp) => {
    rl.question("sebutkan Email Kamu", (email) => {
      if (
        val.isAlphanumeric(nama) &&
        val.isMobilePhone(nomorhp) &&
        val.isEmail(email)
      ) {
        //membuat objek yang berisi data yang dimasukkan oleh pengguna
        const data = { nama, nomorhp, email };

        const file = readFileSync("data/contacts.json", "utf-8");
        const contacts = JSON.parse(file);
        contacts.push(data);

        //menyimpan objek sebagai JSON string kedalam file
        writeFileSync("data/contacts.json", JSON.stringify(contacts));
        console.log("Data kamu telah tersimpan");

        rl.close();
      } else {
        if (val.isAlphanumeric(nama) === false) console.log("Nama Kamu Salah");
        if (val.isMobilePhone(nomorhp) === false)
          console.log("Nomor Kamu Salah");
        if (val.isEmail(email) === false) console.log("Email kamu Salah");
      }

      rl.close();
    });
  });
});
