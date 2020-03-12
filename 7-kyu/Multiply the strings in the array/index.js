/*
  Title:
    Multiply the strings in the array

  Description:
    You received an array with two strings.
    Create a function that will return their product as a string.

  Examples:
    arrMultiply(['9','6']) should return '54'

  Kata Link:
    https://www.codewars.com/kata/multiply-the-strings-in-the-array

  Discuss Link:
    https://www.codewars.com/kata/multiply-the-strings-in-the-array/discuss

  Solutions Link:
    https://www.codewars.com/kata/multiply-the-strings-in-the-array/solutions
*/

// Long Solution
/*
const arrMultiply = arr => `${arr.reduce((total, num) => total * Number(num), 1)}`
*/

// Short Solution
const arrayMultiply = ([a, b]) => `${a * b}`

// Function Export
module.exports = arrayMultiply
