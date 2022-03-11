let arr = [];
console.log(arr);
let elearr = [true, false, 23, 6.77, "vanshaj Hello man", "o", null];
console.log(elearr);
console.log("Element at index 6", elearr[6]);
console.log("Element at index 0", elearr[0]);
elearr[2] = "nothing";
console.log(elearr);
console.log("############################");
// Methode of array
// 1. push method
console.log("Array before push", elearr);
elearr.push("new item");
console.log("Array after push", elearr);
console.log("##################################");
// 2. pop method
console.log("Array before pop", elearr);
elearr.pop();
console.log("Array after pop", elearr);
console.log("##################################");
// 3. shift method
console.log("Array before shift", elearr);
elearr.shift();
console.log("Array after shift", elearr);
console.log("##################################");
// 4. pop method
console.log("Array before unshift", elearr);
elearr.unshift("Newly added item");
console.log("Array after unshift", elearr);
console.log("##################################");
// 5. length method
let length = elearr.length;
console.log(length);
