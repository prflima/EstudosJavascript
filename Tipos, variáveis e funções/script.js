// Declaring variables of type var.

// var height = 5;
// var lenght = 7;

// area = altura * lenght;
// console.log(area);
// var area; // Using var, we can declaring var type after use it.
// Despite being possible, it becomes a bad practice, because if it is from a more complex flow as the chances
// that variables with the same name and doing multifunction.

// Using the let type, we avoid this problem.

let geometricType = 'triangle';
let height = 5;
let lenght = 7

let area; // => we need declaring let type, before use it.

if (geometricType === 'triangle') {
    area = (height * lenght) / 2
} else {
    area = height * lenght
}
console.log(area);
// let area; => We cannot declaring let type after use it, because throw exception error.

// Declaring CONST type, the value of a constant can't be changed through reassignment
const name = "Hi my name is Paulo Ricardo."
console.log(name);
//name = "Hi my name is João"; // thrw exception error;