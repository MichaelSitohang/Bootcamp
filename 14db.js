const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "qwerty",
  //database apa yang mau di panggil
  database: "postgres",
  //dimana dia berjalan
  host: "localhost",
  //ada port
  port: "5432",
});
// tinggal di panggil
module.exports = pool;
