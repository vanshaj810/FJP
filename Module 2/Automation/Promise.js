const fs = require("fs");

console.log("Before");
let f1KaPromise = fs.promises.readFile("f1.txt");
let f2kapromise = fs.promises.readFile("f2.txt");

console.log(f1KaPromise);
console.log(f2kapromise);
f1KaPromise.then(function (data) {
    console.log(data + "");
})

f1KaPromise.catch(function (error) {
    console.log(error);
})
f2kapromise.then(function (data) {
    console.log(data + "");
})
f2kapromise.catch(function (error) {
    console.log(error);
})


console.log("After");