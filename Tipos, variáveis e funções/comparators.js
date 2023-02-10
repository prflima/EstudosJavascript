/* STRICT EQUALITY ===:
We can say that a comparison will consider the common type of the two
variables and also their values.*/

const firstVariable = 10;
const secondVariable = "10";

console.log(firstVariable === secondVariable) // => false
/*The result was be false because even though the variables have the value 10,
they aren't of the same type, and strict equality requires that the type is also equal.*/


/*We can check the type of each variable this way:
typeof(variable), let's display in the console: */
console.log(typeof(firstVariable)) // => number
console.log(typeof(secondVariable)) // => string


/* LOOSE EQUALITY ==:
We can say that loose equality converts the variables to a commom type and considers only the values of 
each variable in the comparison.*/

/* In this case, even though string is different from number, because both have the value 10,
the result will be true: */
console.log(firstVariable == secondVariable) // => true