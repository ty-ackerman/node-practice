// console.log("Starting app.js")

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs")

const notes = require("./notes.js")

const argv = yargs.argv;
let command = argv._[0];
// console.log(`Command ${command}`)
// console.log("Yargs", argv)



if (command === "add") {
    let note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log(`Note Added.`)
        notes.logNote(note)
    } else {
        console.log(`Note With Title "${argv.title}" Already Exists.`)
    }

} else if (command === "list") {
    notes.getAll();
    
} else if (command === "read") {
    let note = notes.getNote(argv.title)
    //Format to look the same as "addNote"
    if (note) {
        console.log(`Note Found.`)
        notes.logNote(note)
    } else {
        console.log(`Note With Title "${argv.title}" Not Found.`)
    }

} else if (command === "remove") {
    const noteRemoved = notes.removeNote(argv.title)
    let message = noteRemoved ? "Note Removed" : "Note Not Found";
    console.log(message)
} else {
    console.log("Command not recognized")
}
