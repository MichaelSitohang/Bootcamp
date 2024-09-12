const validator = require("validator");
const fs = require("fs");
const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");
const { fileURLToPath } = require("url");
const { stringify } = require("querystring");

const rl = readline.createInterface({ input, output });

rl.question("Siapa nama kamu? ", (nama) => {
  rl.question("Berapa nomor telepon kamu?", (mobile) => {
    rl.question("apa nama email kamu?", (email) => {
      const newcontact = addData(nama, mobile, email);
      if (newcontact) {
        Savedata(newcontact);
      }
      rl.close();
    });
  });
});

function addData(nama, mobile, email) {
  if (!validator.isMobilePhone(mobile)) {
    console.log("Format nomor telepon anda salah");
    rl.close();
    return;
  }
  if (!validator.isEmail(email)) {
    console.log("Format email anda salah");
    rl.close();
    return;
  }
}
function Savedata(result) {
  try {
    const result = { nama, mobile, email };
    const file = fs.readFileSync("data/contacts4.json", "utf-8");
    const contact = JSON.parse(file);
    contact.push(result);

    fs.writeFileSync("data/contacts4.json", JSON.stringify(contact));
    rl.close();

    console.log("Data telah berhasil disimpan ke contacts4.json");
  } catch (error) {
    console.log("Terjadi kesalahan", error.message);
  }
}
