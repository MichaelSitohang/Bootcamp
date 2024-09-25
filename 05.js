const yargs = require("yargs");
console.log(yargs.argv);
const fs = require("fs")

// di terminal buat seperti ini, node namafile add --nama="michael" --mobile="mobile" --email="email"
yargs.command({
    command: "add",
    describe: "add new contact",
    builder: {
        nama: {
            describe: "contact nama",
            demandOption: true,
            type: "string",
        },
        email: {
            describe: "contact email",
            demandOption: false,
            type: "string",
        },
        mobile: {
            describe: "contact mobile phone number",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        const contact = {
            name: argv.nama,
            email: argv.email,
            mobile: argv.mobile,
        };
        console.log(contact);
    },
});
yargs.parse();

