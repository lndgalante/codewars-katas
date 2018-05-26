/*
  Title:
    Stringy Strings

  Description:
    Write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

    The string should start with a 1.

    A string with size 6 should return :'101010'.

    With size 4 should return : '1010'.

    With size 12 should return : '101010101010'.

    The size will always be positive and will only use whole numbers.

  Kata Link:
    https://www.codewars.com/kata/stringy-strings

  Discuss Link:
    https://www.codewars.com/kata/stringy-strings/discuss

  Solutions Link:
    https://www.codewars.com/kata/stringy-strings/solutions
*/

// Long Solution
/*
const stringy = size =>
  Array.from(Array(size), (el, i) => (i % 2 === 0 ? 1 : 0)).join('')
  */

// Short Solution
const stringy = size =>
  [...new Array(size)].map((el, i) => (i % 2 === 0 ? 1 : 0)).join('')

// Function Export
module.exports = stringy
