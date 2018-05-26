/*
  Title:
    Factorial Factory

  Description:
    In mathematics, the factorial of integer 'n' is written as 'n!'.
    It is equal to the product of n and every integer preceding it.

    Your mission is simple: write a function that takes an integer 'n' and returns 'n!'.

    You are guaranteed an integer argument. For any values outside the positive range, return null, nil or None .

  Examples:
    5! = 1 x 2 x 3 x 4 x 5 = 120

  Notes:
    0! is always equal to 1. Negative values should return null;

  Kata Link:
    https://www.codewars.com/kata/factorial-factory

  Discuss Link:
    https://www.codewars.com/kata/factorial-factory/discuss

  Solutions Link:
    https://www.codewars.com/kata/factorial-factory/solutions
*/

// Long Solution
const factorial = n =>
  n >= 0
    ? Array.from({ length: n }, (_, index) => index + 1).reduce(
        (total, value) => total * value,
        1
      )
    : null

// Alternative Solution
/*
const factorial = n => (n < 0 ? null : n === 0 ? 1 : n * factorial(--n))
*/

// Function Export
module.exports = factorial
