const fs = require('fs');
console.log("Before");
fs.readFile("file.txt","utf-8",cb);
function cb(error,data) {
    if (error) {
        console.log(error);
    } else {
        console.log(data,"");
        
    }
}
// console.log(content);
console.log("After");