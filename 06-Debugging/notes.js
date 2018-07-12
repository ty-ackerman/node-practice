// console.log("Starting notes.js")

const fs = require("fs")

const fetchNotes = () => {
    //What this essentially does is checks to see if the file "notes-data.json" exists. If it does, the contents are read and saved as a string. If not, nothing happens, and the code continues (with the file being created in fs.writeFileSync())
    try {
        //Reads the file and returns the contents as a string
        let notesString = fs.readFileSync("notes-data.json")

        //Takes the string defined above and makes it into an object
        return JSON.parse(notesString)

    } catch (e) {
        return [];
    }
}

const saveNotes = (notes) => {
    //Pushes the new notes object (which includes the new note instance)to the JSON file after it is converted into a string.
    fs.writeFileSync("notes-data.json", JSON.stringify(notes))
}

const addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {
        title,
        body
    }
    //Filter checks the array for any duplicates - in this case, any objects with identical titles. If there are, duplicate notes will return the value of true.
    let duplicateNotes = notes.filter((note) => note.title === title);
    
    //This if statement then checks to see whether the value of the duplicateNotes variable is true or false. If false, that means there are no duplicates, and the note will be added.    
    if (duplicateNotes.length === 0) {
        //Takes the object defined above, and adds a new note. The purpose of this is to not overwrite the existing contents in the JSON file
        notes.push(note);
        saveNotes(notes)
        return note;
    }
}

const getAll = () => {
    console.log("Getting All Notes")
}

const getNote = (title) => {
    //fetch notes
    let notes = fetchNotes()
    //filter note that matches title of arg
    let foundNote = notes.filter((note) => note.title === title);
    return foundNote[0];
}

const removeNote = (title) => {
    //Fetch notes -> returned as a string
    let notes = fetchNotes();

    //Filter notes, removing the one with title of argument
    let filteredNotes = notes.filter((note) => note.title !== title);

    //start new notes array
    saveNotes(filteredNotes)

    return notes.length !== filteredNotes.length

}

const logNote = (note) => {
    console.log("---")
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    fetchNotes,
    saveNotes,
    logNote
}