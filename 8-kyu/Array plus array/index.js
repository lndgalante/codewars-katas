/*
  Title:
    Array plus array

  Description:
    I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements.
    I'll appreciate for your help.

  Notes:
    Each array includes only integer numbers. Output is a number too.

  Kata Link:
    https://www.codewars.com/kata/array-plus-array

  Discuss Link:
    https://www.codewars.com/kata/array-plus-array/discuss

  Solutions Link:
    https://www.codewars.com/kata/array-plus-array/solutions
*/

// Long Solution
const arrayPlusArray = (arr1, arr2) =>
  [...arr1, ...arr2].reduce((total, value) => total + value, 0)

// Function Export
module.exports = arrayPlusArray
