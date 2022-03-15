//move a file
let fs = require('fs');
let path = require('path');
let sourcePath=path.join(__dirname,"File.txt");
let destinationpath=path.join(__dirname,"New folder","File.txt");
fs.copyFileSync(sourcePath,destinationpath);
fs.unlinkSync(sourcePath);