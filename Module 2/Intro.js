// JAVASCRIPT MADE IN ALMOST 7 DAYS TO RUN ON A BROWER
// NODE IS A RUN TIME ENVIRONMENT TO RUN OUR JAVASCRIPT CODE ON OUR MACHINE
// PRINTTING IN JAVASCRIPT
console.log("Hello world");
console.log(200 + 300);
// VARIABLES AND DATA TYPES IN JAVASCRIPT
let a = 200;
console.log(a);
console.log(typeof a);
let b = "my name is vanshaj";
console.log(b);
console.log(typeof b);
let c = true;
console.log(c);
console.log(typeof c);
let d = "y";
console.log(d);
console.log(typeof d);
let e = 3.44;
console.log(e);
console.log(typeof e);
let f = null;
console.log(f);
console.log(typeof f);
for (let index = 1; index <= 5; index++) {
  console.log(index);
}
// IS PRIME QUESTION
let num = 24;
let flag = 1;
for (let index = 2; index * index <= num; index++) {
  if (num % index == 0) {
    flag = 0;
    break;
  }
}
if (flag === 1) {
  console.log(true);
} else {
  console.log(false);
}
