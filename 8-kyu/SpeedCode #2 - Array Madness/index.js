/*
  Title:
    SpeedCode #2 - Array Madness

  Description:
    Given two integer arrays a, b, both of length >= 1,create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

  Examples:
    arrayMadness([4, 5, 6], [1, 2, 3]);
      // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

  Kata Link:
    https://www.codewars.com/kata/speedcode-number-2-array-madness

  Discuss Link:
    https://www.codewars.com/kata/speedcode-number-2-array-madness/discuss

  Solutions Link:
    https://www.codewars.com/kata/speedcode-number-2-array-madness/solutions
*/

// Long Solution
const arrayMadness = (a, b) =>
  a.reduce((total, num) => total + num ** 2, 0) >
  b.reduce((total, num) => total + num ** 3, 0)

// Function Export
module.exports = arrayMadness
