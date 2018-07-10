console.log("starting notes.js")


//Module is super useful to export files using module.exports.[any variable/funciton you want to export]
module.exports.addNote = () => {
    console.log("addNote")
    return "new note"
}

module.exports.add = (a, b) => {
    return a + b
}

