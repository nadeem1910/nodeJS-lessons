// const maths = require("./mathsModule") // 1st way to import the module
const {add, sub, mult, div} = require("./mathsModule")  // 2nd way to import the module

console.log("Value is -:",add(6,4))
console.log("Value is -:", sub(10,5))
console.log("Value is -:", mult(8,5))
console.log("Value is -:", div(8,2))