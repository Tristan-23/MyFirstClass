const Stoel = require("./stoel.js");

const stoel = new Stoel("rood", 60);

console.log(stoel.echoKleur());
console.log(stoel.echoZithoogte());
console.log(stoel.verstelZithoogte(10));
