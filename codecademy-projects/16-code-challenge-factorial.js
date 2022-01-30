/*
GOAL:
Write a function factorial() that takes a number as an argument and returns the factorial of the number.

Example:
factorial(6); 
// returns `720` because 6 * 5 * 4 * 3 * 2 * 1 = 720 

SOLUTION:
Exceptions:
1. 0! = 1;
2. non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n
*/

//Compute the factorial of input (if input correct)
const computeProduct = (number) => {
    let product = 1;
    let resultInString = '1';
    for (i = 2; i <= number; i++) {
        product *= i;
        resultInString += ' * ' + i;
    }
    return `The factorial of ${number} is ${product} because ${resultInString} = ${product}`;
}

//Check the input correctness and return the appropriate result
const factorial = (n) => {
    return Number.isInteger(n) === false ? console.log('The value you want to denote by n! must be either 0 or a positive integer')
    : Math.sign(n) === -1 ? console.log('The value you want to denote by n! must be either 0 or a positive integer')
    : Math.sign(n) === 0 ? console.log(1)
    : console.log(computeProduct(n))
}

//Check the code correctness
factorial(6);
factorial(-3);
factorial(2/3);