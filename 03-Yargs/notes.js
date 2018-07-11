console.log("Starting notes.js")

let addNote = (title, body) => {
    console.log("Adding Note", title, body)
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