// selanjutnya memanggil http. kalai pakai titik memanggil fungsi
// saya mau bijin server yargs, yang mana ada req dan res, apa yang dilakukan saat dibuat maka akan ada di dalam kurung
// dan kamu menjalankannya di port 3000
//   port 3000, bisa hostname atau ip idreess,

const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    const url = req.url;

    // Untuk URL "/about"
    if (url === "/about") {
      fs.readFile("./07about.html", (err, data) => {
        if (err) {
          res.writeHead(404);
          res.write("Error: page not found");
          res.end();
        } else {
          res.writeHead(200, {
            "Content-Type": "text/html",
          });
          res.write(data);
          res.end();
        }
      });

      // Untuk URL "/contact"
    } else if (url === "/contact") {
      fs.readFile("./07contact.html", (err, data) => {
        if (err) {
          res.writeHead(404);
          res.write("Error: page not found");
          res.end();
        } else {
          res.writeHead(200, {
            "Content-Type": "text/html",
          });
          res.write(data);
          res.end();
        }
      });

      // Untuk URL lainnya, tampilkan index.html
    } else {
      fs.readFile("./07index.html", (err, data) => {
        if (err) {
          res.writeHead(404);
          res.write("Error: page not found");
          res.end();
        } else {
          res.writeHead(200, {
            "Content-Type": "text/html",
          });
          res.write(data);
          res.end();
        }
      });
    }
  })
  .listen(3000, () => {
    console.log("Server is listening on port 3000");
  });
