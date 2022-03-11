// Creating/Declaring the function
function sayHello() {
  console.log("Hello from function");
}
sayHello();
// FUNCTION WITH PARAMETERS
function add(params, params2) {
  let sum = params + params2;
  console.log(sum);
}
add(23983419481391, 10000222);
// funtion with return type
function add2(params, params2) {
  return params + params2;
}
let summ = add2(25, 5);
console.log(summ);
// function are called first class citizen because we can save function inside variable
let a = function sub(params, num2) {
  return params - num2;
};
console.log(a(20, 10));
console.log(a);
console.log(typeof a);
// IIFE -> Immediately Invoked Function Expression
// without parameters
(function(){
console.log("Hello from IIFE");
})();
// IIFE with Parameters
(function(num1,num2){
    console.log(num1/num2);
})(100,2);
(function() {
    console.log("IIfe func");
})();
(function (params,num2) {
    console.log(params+num2);
})(200,300);
