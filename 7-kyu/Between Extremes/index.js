/*
  Title:
    Between Extremes

  Description:
    Given an array of numbers, return the difference between the largest and smallest values.

  Examples:
    [23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).
    [1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

  Notes:
      The array will contain a minimun of two elements. Input data range guarantees that max-min will cause no integer overflow.

  Kata Link:
    https://www.codewars.com/kata/between-extremes

  Discuss Link:
    https://www.codewars.com/kata/between-extremes/discuss

  Solutions Link:
    https://www.codewars.com/kata/between-extremes/solutions
*/

// Long Solution
const betweenExtremes = numbers => Math.max(...numbers) - Math.min(...numbers)

// Function Export
module.exports = betweenExtremes
