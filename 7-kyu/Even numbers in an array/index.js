/*
  Title:
    Even numbers in an array

  Description:
    Given an array of digitals numbers, return a new array of length number containing the last even numbers from the original array (in the same order).
    The original array will be not empty and will contain at least "number" even numbers.

  Examples:
    ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
    ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
    ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

  Kata Link:
    https://www.codewars.com/kata/even-numbers-in-an-array

  Discuss Link:
    https://www.codewars.com/kata/even-numbers-in-an-array/discuss

  Solutions Link:
    https://www.codewars.com/kata/even-numbers-in-an-array/solutions
*/

// Long Solution
const evenNumbers = (array, number) => array.filter(number => number % 2 === 0).slice(-number)

// Function Export
module.exports = evenNumbers
