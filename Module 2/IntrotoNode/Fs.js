const fs = require('fs');
let path = require('path');
// console.log(fs);
// CRUD OPERATIONS OF FILE SYSTEM MODULE
let FilePath=path.join(__dirname,"file.txt");
// CREATE A NEW FILE IF THE FILE NOT EXISTS IF IT EXISTS IT OVERRIDES THE DATA IN THE FILE
fs.writeFileSync(FilePath,"The data in file.js");
fs.writeFileSync(FilePath,"The data changed");
// fs read
let content=fs.readFileSync(FilePath,'utf-8');
console.log(content);
// fs update
console.log(fs.readFileSync(FilePath,'utf-8'));
fs.appendFileSync(FilePath," \nnewly added data in the file");
console.log(fs.readFileSync(FilePath,'utf-8'));
// fs delete
fs.unlinkSync(FilePath);