//console.log("starting app.js")

const fs = require("fs")
const os = require("os")
//Lodash
const _ = require("lodash")
const notes = require("./notes.js")
let res = notes.add(10,20);


// console.log(_.isString(true))
// console.log(_.isString("true"))

//uniq removes duplicates in an array
let filteredArray = _.uniq(["Tyler", "1", "Tyler", 1, 2, 3, 4])
console.log(filteredArray)




// var user = os.userInfo();


// fs.appendFileSync("greetings.txt", `Hello ${user.username}!: You are ${notes.age}`)

// console.log(`Result: ${res}`)

