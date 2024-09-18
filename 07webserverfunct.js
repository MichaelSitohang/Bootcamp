const http = require("http");
const fs = require("fs");

// Fungsi untuk membaca dan menampilkan file HTML
const renderHTML = (filePath, res) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, {
        "Content-Type": "text/html",
      });
      res.write("Error: page not found");
    } else {
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.write(data);
    }
    res.end();
  });
};

http
  .createServer((req, res) => {
    const url = req.url;

    // Mengarahkan ke halaman berdasarkan URL
    if (url === "/about") {
      renderHTML("./07about.html", res); // Panggil fungsi renderHTML untuk /about
    } else if (url === "/contact") {
      renderHTML("./07contact.html", res); // Panggil fungsi renderHTML untuk /contact
    } else {
      renderHTML("./07index.html", res); // Panggil fungsi renderHTML untuk halaman lain (default index)
    }
  })
  .listen(3000, () => {
    console.log("Server is listening on port 3000");
  });
