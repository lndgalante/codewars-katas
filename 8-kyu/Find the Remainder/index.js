/*
  Title:
    Find the Remainder

  Description:
    Write a function that accepts two arguments and returns the remainder after dividing the larger number by the smaller number.
    Division by zero should return NaN (in C#, throw a new DivideByZeroException instead).
    Arguments will both be integers.

  Kata Link:
    https://www.codewars.com/kata/find-the-remainder

  Discuss Link:
    https://www.codewars.com/kata/find-the-remainder/discuss

  Solutions Link:
    https://www.codewars.com/kata/find-the-remainder/solutions
*/

// Short Solution
const remainder = (a, b) => (a > b ? a % b : b % a)

// Function Export
module.exports = remainder
