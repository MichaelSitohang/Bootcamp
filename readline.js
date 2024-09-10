// yang diawal ini dia adalah fungsi yang dari node js untuk memanggil salah satu fitur data node js
const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");
const { writeFileSync } = require("node:fs");

// kalau yang interface ini adalah tampilan agar dia di tanya satu satu
const rl = readline.createInterface({ input, output });

// kalau yang ini adalah fungsi untuk bertanya dan jawabannya
rl.question("siapa nama kamu?", (answer1) => {
  rl.question("Berapa nomor telepon kamu?", (answer2) => {
    rl.question("apa alamat email kamu?", (answer3) => {
      // kalau const result ini hasilnya yang akan muncul
      const result = `Nama kamu : ${answer1}\n Nomor Telepon: ${answer2}\n Email Kamu: ${answer3}\n`;

      //writefilesync ini untuk membuat jawabannya ke text2.txt
      writeFileSync("text2.txt", result);

      // jangan lupa membuat console.log
      console.log("Data telah disimpan ke file text2.txt");

      rl.close();
    });
  });
});
// nama no telp dan email dan disimpan dalam file
