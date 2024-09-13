const yargs = require("yargs");
console.log(yargs.argv);

// di terminal buat seperti ini, node namafile add --nama="kunto" --mobile="mobile" --email="email"
yargs.command({
  command: "add",
  describe: "add new contact",
  builder: {
    nama: {
      describe: "contact name",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "contact email",
      demandOption: false,
      type: "sting",
    },
    mobile: {
      describe: "contact mobile phone number",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    const contact = {
      nama: argv,
      nama,
      email: argv,
      email,
      mobile: argv,
      mobile,
    };
    console.log(contact);
  },
});

yargs.parse();
