let cp = require('child_process');

// console.log(cp);
// OPEN CALCULATOR WITH THE HELP OF THIS FILE
// cp.execSync('calc');
// open vscode with child process
// cp.execSync('code');
var content = cp.execSync("node Teest.js");
console.log("The output of test.js is this : " +content);
