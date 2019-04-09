/*
  Title:
    Is It Negative Zero (-0)?

  Description:
    There exist two zeroes: +0 (or just 0) and -0.
    Write a function that returns true if the input number is -0 and false otherwise (True and False for Python).
    In JavaScript / TypeScript / Coffeescript the input will be a number.
    In Python / Java / C / NASM / Haskell the input will be a float.

  Kata Link:
    https://www.codewars.com/kata/is-it-negative-zero-0

  Discuss Link:
    https://www.codewars.com/kata/is-it-negative-zero-0/discuss

  Solutions Link:
    https://www.codewars.com/kata/is-it-negative-zero-0/solutions
*/

// Long Solution
const isNegativeZero = n => Object.is(n, -0)

// Function Export
module.exports = isNegativeZero
