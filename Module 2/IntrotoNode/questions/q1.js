//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made
let fs = require('fs');
let path = require('path');

// if (!fs.existsSync("MyDirectory")) {
//     fs.mkdirSync("MyDirectory");
// }
// fs.rmdirSync("MyDirectory");
let folderPath=path.join(__dirname,"New folder");
if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
}
let filepath=path.join(__dirname,"New folder","New File.txt");
fs.writeFileSync(filepath,"new file has been made");