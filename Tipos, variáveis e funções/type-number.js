// Type Number and operations math.

const number = 3;

const firstNumber = 1;
const secondNumber = 3;

// -> + <- is operation for sum
const mathSumOperation = (firstNumber + secondNumber);
console.log(mathSumOperation);

// -> * <- is operation for Multiplication
const mathMultiplicationOperation = (firstNumber * secondNumber);
console.log(mathMultiplicationOperation);

// -> / <- is operation for Division
const mathDivisionOperation = (firstNumber / secondNumber);
console.log(mathDivisionOperation);

// -> - <- is operation for Subtraction
const mathSubtractionOperation = (firstNumber - secondNumber);
console.log(mathSubtractionOperation);

// Float number

const piNumber = Math.PI;
const elevatedFloat = 5 ** 2; // Exponential Operator
console.log(piNumber, elevatedFloat);

// Formatting numbers with round and toFixed

function calculateRemuneration(salary, workedHours) {
    const salaryHour = (salary / workedHours);
    return salaryHour;
}

console.log(Math.round(calculateRemuneration(3000, 180))); // Formatting using math.Round -> transform to integer.
console.log(calculateRemuneration(3000, 180).toFixed(2)); // with toFixed you choose how many decimal places you want to show, in our case only 2

// Converting to local currency
const formattingLocale = calculateRemuneration(3000, 176).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
console.log(formattingLocale);

// Sorting a list of numbers.

var list = [10, 1, 5, 19, 80, 76, 33, 20, 14]
console.log(list.sort()); // The sort function does not sort in the way we expect, as it considers the unicode table.

/* sort optionally receives a comparison function that, 
given two values, must return an integer:

If it is 0, it means they are equal.
If it is -1 it indicates that the first value is less.
If it is 1, the second is smaller. */

// Lets create this function
function compareNumbers(a,b){
    if(a == b) return 0;
    if(a < b) return -1;
    if(a > b) return 1;
}

// Lets call the sort passing the compareNumbers
console.log(list.sort(compareNumbers));

// Simplifying the implementation
console.log(list.sort((a,b) => a - b));

