const fs = require('fs')

// // reading from a file
// let fileContent = fs.readFileSync('f1.txt')
// console.log("File content is -: " + fileContent)

// // writing in a file
// // if the file name that is passed is not existed then new file will create 

// fs.writeFileSync('f2.txt','This F2 file is Important')
// console.log("Text has been written in file")

// // append / update in a file
// fs.appendFileSync('f1.txt',' Updated text')
// console.log("Text has been appended")

// // deleting a file
// fs.unlinkSync('f3.txt')
// console.log("File has been deleted")

/*--------------xxx-----------Directory--------------xxx-----------*/

// create directory
// fs.mkdirSync('myDirectory')

// check the content inside of a directory
let folderPath = 'D:\\js\\node\\myDirectory'

let folderContent = fs.readdirSync(folderPath)
console.log("Folder content -: ", folderContent)


// check whether directory exists or not
console.log(fs.existsSync('myDirectory'))

// remove directory
fs.rmdirSync('myDirectory')