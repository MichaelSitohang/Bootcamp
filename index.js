// pemanggilan modul file system
const fs = require("fs");

// memanggil file "text.txt atau membuat file.text dengan tulisan saya ganteng"
fs.writeFileSync("text.txt", "saya ganteng");

// membaca isi file text.txt dan memberitahu apabila ada eror
fs.readFile("text.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
