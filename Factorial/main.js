/*
Write a function factorial() that takes a number as an argument and returns the factorial of the number.

Example:

factorial(6); 
// returns `720` because 6 * 5 * 4 * 3 * 2 * 1 = 720 
Assume only positive numbers will be given as an argument for the factorial() function.
*/

// Write function below
// 1. define function accepting number as parameter
// 2. calculate factorial by using a loop and incrementing downwads until i = 1
// 3. return result

function factorial(x) {
    let product = 1;
    for (let i = x; i >= 1; i--) {
      product *= i;
    }
    return product;
  }