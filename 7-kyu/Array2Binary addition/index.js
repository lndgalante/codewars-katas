/*
  Title:
    Array2Binary addition

  Description:
    Given an array containing only integers, add all the elements and return the binary equivalent of that sum.

    If the array contains any non-integer element (e.g. an object, a float, a string and so on), return false.

  Examples:
    arr2bin([1,2]) == '11'
    arr2bin([1,2,'a']) == false

  Notes:
    The sum of an empty array is zero.

  Kata Link:
    https://www.codewars.com/kata/array2binary-addition

  Discuss Link:
    https://www.codewars.com/kata/array2binary-addition/discuss

  Solutions Link:
    https://www.codewars.com/kata/array2binary-addition/solutions
*/

// Long Solution
/*
 const arr2bin = arr =>
  arr.some(value => typeof value !== 'number')
    ? false
    : arr.reduce((total, value) => total + value, 0).toString(2)
*/

// Short Solution
const arr2bin = arr =>
  arr.every(Number.isInteger) &&
  arr.reduce((total, value) => total + value, 0).toString(2)

// Function Export
module.exports = arr2bin
