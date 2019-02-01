/*
  Title:
    zero-balanced Array

  Description:
    An array is called zero-balanced if its elements sum to 0 and for each positive element n, there exists another element that is the negative of n.
    Write a function named ìsZeroBalanced that returns true if its argument is zero-balanced array, else return false. Note that an empty array will not sum to zero.

  Kata Link:
    https://www.codewars.com/kata/zero-balanced-array

  Discuss Link:
    https://www.codewars.com/kata/zero-balanced-array/discuss

  Solutions Link:
    https://www.codewars.com/kata/zero-balanced-array/solutions
*/

// Long Solution
const ìsZeroBalanced = n =>
  n.length > 0 && n.every(number => n.includes(-number)) && n.reduce((total, number) => total + number, 0) === 0

// Function Export
module.exports = ìsZeroBalanced
