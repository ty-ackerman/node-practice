// let obj = {
//     name: "Ty"
// }

// let stringObj = JSON.stringify(obj);

// console.log(typeof stringObj)
// console.log(obj)
//keys and values are both strings
// console.log(stringObj)

// let personString = '{"name": "Ty", "age": 24}';

// let person = JSON.parse(personString)

// console.log(typeof person)
// console.log(person)

const fs = require("fs")

let originalNote = {
    title: "Some Title",
    body: "Some body"
};

let originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync("notes.json", originalNoteString);

let noteString = fs.readFileSync('notes.json')
let note = JSON.parse(noteString)

console.log(typeof note)
console.log(note.title)
