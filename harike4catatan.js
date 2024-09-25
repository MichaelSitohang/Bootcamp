const validator = require("validator");
const fs = require("fs");
const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

// membuat interface untuk membaca input dari command line "tidak bisa ngetikin seesuatu kalau tidak dibuat"
const rl = readline.createInterface({ input, output });

// mengajukan pertanyaan pertama kedua dan ketiga kepada pengguna
rl.question("Siapa nama kamu? ",(nama) => {
    rl.question("Berapa nomor telepon kamu? ",(nomorhp) => {
        rl.question("Apa alamat email kamu ?",(email) => {
            // masuk ke pengecekan apakah itu nomor hp atau tidak
            // kalau pakai tanda seru berarti dia false atau dalam artian jika dia salah
            if (!validator.isMobilePhone(nomorhp, "id-ID")) {
              console.log("Format nomor telepon anda salah");
              // harus di tutup dengan rl.close agar dia bisa lanjut lagi ke pertanyaan berikutnya
              rl.close();
              return;
            }

            if (!validator.isEmail(email)) {
              console.log("Format Email anda salah loohh");
              rl.close();
              return;
            }
            // selanjutnya kita buat "alias" untuk nantinya mempermudah kita membuat fungsi yang digunakan untuk menggabungkan data
            const result = { nama, nomorhp, email };
            const file = fs.readFileSync("data/contacts4.json", "utf-8");
            const contacts4 = JSON.parse(file);
            contacts4.push(result);

            // selanjutnya kita simpan file ke JSON sting tadi
            fs.writeFileSync("data/contacts4.json", JSON.stringify(contacts4));

            // menutup interface readline
            rl.close();

            console.log("Data telah berhasil tersimpan ke contacts4.json");
        )};
)};
)};
