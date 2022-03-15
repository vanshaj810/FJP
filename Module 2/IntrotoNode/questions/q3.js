//copy index.html file from module1 to a new folder inside module2 having name html.
let fs = require('fs');
let path = require('path');
// ..(Double dot) se ek folder piche jate h
let destinationpath=path.join(__dirname,"..","..","html.html");
let sourcePath=path.join(__dirname,"..","..","..","Module 1","Project1","index.html");
fs.copyFileSync(sourcePath,destinationpath);