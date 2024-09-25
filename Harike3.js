const validator = require("validator");

const email = "michaelsitohang2030@gmail.com";

if (validator.isEmail(email)) {
  console.log("format email anda benar");
} else {
  console.log("format email anda salah");
}
