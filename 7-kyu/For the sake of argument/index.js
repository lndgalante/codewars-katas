/*
  Title:
    For the sake of argument

  Description:
    Write a function named numbers that returns true if all the parameters it is passed are of the Number type.
    Otherwise, the function should return false.
    The function should accept any number of parameters.

  Examples:
    numbers(1, 4, 3, 2, 5); // true
    numbers(1, "a", 3); // false
    numbers(1, 3, NaN); // true

  Kata Link:
    https://www.codewars.com/kata/for-the-sake-of-argument

  Discuss Link:
    https://www.codewars.com/kata/for-the-sake-of-argument/discuss

  Solutions Link:
    https://www.codewars.com/kata/for-the-sake-of-argument/solutions
*/

// Long Solution
const numbers = (...args) => args.every(arg => typeof arg === 'number')

// Function Export
module.exports = numbers
