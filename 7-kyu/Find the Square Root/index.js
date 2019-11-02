/*
  Title:
    Find the Square Root

  Description:
    Create a Function that takes one parameter and returns its square root rounded to 5 decimal places.
    You are not allowed to use the Math.sqrt() or the Math.pow() methods.

  Notes:
    Trailing zeros should be left out. For example
      squareRoot(39) // => 6.245;
    rather than
      squareRoot(39) // => 6.24500;

  Kata Link:
    https://www.codewars.com/kata/find-the-square-root

  Discuss Link:
    https://www.codewars.com/kata/find-the-square-root/discuss

  Solutions Link:
    https://www.codewars.com/kata/find-the-square-root/solutions
*/

// Long Solution
const squareRoot = x => Number((x ** 0.5).toFixed(5))

// Function Export
module.exports = squareRoot
