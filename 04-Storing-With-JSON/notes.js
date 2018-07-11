console.log("Starting notes.js")

const fs = require("fs")

let addNote = (title, body) => {
    let notes = [];
    let note = {
        title,
        body
    }

    //What this essentially does is checks to see if the file "notes-data.json" exists. If it does, the contents are read and saved as a string. If not, nothing happens, and the code continues (with the file being created in fs.writeFileSync())
    try {
        //Reads the file and returns the contents as a string
        let notesString = fs.readFileSync("notes-data.json")

        //Takes the string defined above and makes it into an object
        notes = JSON.parse(notesString)

    } catch (e) {

    }

    //Filter checks the array for any duplicates - in this case, any objects with identical titles. If there are, duplicate notes will return the value of true.
    let duplicateNotes = notes.filter((note) => note.title === title);
    
    //This if statement then checks to see whether the value of the duplicateNotes variable is true or false. If false, that means there are no duplicates, and the note will be added.    
    if (duplicateNotes.length === 0) {
        //Takes the object defined above, and adds a new note. The purpose of this is to not overwrite the existing contents in the JSON file
        notes.push(note);
        //Pushes the new notes object (which includes the new note instance)to the JSON file after it is converted into a string.
        fs.writeFileSync("notes-data.json", JSON.stringify(notes))
    }
}

let getAll = () => {
    console.log("Getting All Notes")
}

let getNote = (title) => {
    console.log("Getting Note", title)
}

let removeNote = (title) => {
    console.log("Removing Note", title)
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}