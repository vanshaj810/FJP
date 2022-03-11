// "C:\Users\DELL\Desktop\FJP\Module 2\IntrotoNode\Path.js"
let path = require('path');
// console.log(path);
let extensionname=path.extname("C:\Users\DELL\Desktop\FJP\Module 2\IntrotoNode\Path.js");
console.log(extensionname);
let baseName=path.basename(__dirname);
console.log(baseName);
let b=path.basename(__filename);
console.log(b);
let DirPath=__dirname;
let FilePath=__filename;
console.log(DirPath);
console.log(FilePath);
let newFilePath=path.join(DirPath,"Teest.js");
console.log(newFilePath);