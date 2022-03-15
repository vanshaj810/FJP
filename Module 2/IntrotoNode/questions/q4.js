// read content of unorganised folder and make  an array which has extension name of each file
let fs = require('fs');
let path = require('path');
let extArr=[];
let folderPath=path.join(__dirname,"..","unorganised");
let content=fs.readdirSync(folderPath);
for (let i = 0; i < content.length; i++) {
    let name = content[i];
    let extname=path.extname(name);
    extArr.push(extname);
    
}
// console.log(extArr);