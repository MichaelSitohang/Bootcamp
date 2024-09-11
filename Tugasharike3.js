const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");
const { writeFileSync } = require("node:fs");
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
        const data = `nama kamu adalah ${nama} \n nomor kamu adalah ${nomorhp}\n email kamu adalah ${email}`;
        writeFileSync(`jawaban_tugasharike3`, data);
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
