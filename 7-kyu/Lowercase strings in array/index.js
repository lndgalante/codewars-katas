/*
  Title:
    Lowercase strings in array

  Description:
    Create a function to lowercase all strings in an array. Non-string items should remain unchanged.

  Examples:
    arrayLowerCase(['Red', 'Green']) => ['red', 'green']
    arrayLowerCase([1, 'Green']) => [1, 'green']

  Kata Link:
    https://www.codewars.com/kata/lowercase-strings-in-array

  Discuss Link:
    https://www.codewars.com/kata/lowercase-strings-in-array/discuss

  Solutions Link:
    https://www.codewars.com/kata/lowercase-strings-in-array/solutions
*/

// Long Solution
const arrayLowerCase = array => array.map(element => (typeof element === 'string' ? element.toLowerCase() : element))

// Function Export
module.exports = arrayLowerCase
