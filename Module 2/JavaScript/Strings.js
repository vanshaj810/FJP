let str="My name is Vanshaj Bhardwaj";
// 1. length method extract length of a string
let len=str.length;
console.log(len);
// 2. slice method -> extract part of a string
let slicedstr=str.slice(2,5);
console.log(slicedstr);
// 3. replace method -> replace a part of sting with given word
let replaced=str.replace("Bhardwaj","Sharma");
console.log(replaced);
// 4. upperstring method
let upper=str.toUpperCase();
console.log(upper)
// 5. lowerstring method
let lower=str.toLowerCase();
console.log(lower);
// 6.concate

let firstName = "Vanshaj";
let lastName = " Bhardwaj";

let fullNamee = firstName.concat(lastName);
console.log(fullNamee);
// or 

let fullName = firstName+lastName;
console.log(fullName);

//7.split -> return arr 
let splitted =  str.split(" ");
console.log(splitted)


