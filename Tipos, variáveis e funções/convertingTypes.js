// implicit conversion
const number = 10;
const numberString = "10";

console.log(number === numberString) // => false
console.log(number == numberString) // true => this is implicit conversion 
console.log(number + numberString) // => concat
console.log(number + Number(numberString)) // => 912, this is explicit conversion