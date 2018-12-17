/*
  Title:
    Alternate capitalization

  Description:
    Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

  Examples:
    capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

  Notes:
    The input will be a lowercase string with no spaces.

  Kata Link:
    https://www.codewars.com/kata/alternate-capitalization

  Discuss Link:
    https://www.codewars.com/kata/alternate-capitalization/discuss

  Solutions Link:
    https://www.codewars.com/kata/alternate-capitalization/solutions
*/

// Long Solution
/*
const alternateCase = string =>
  [...string].map((char, index) => (index % 2 === 0 ? char.toUpperCase() : char.toLowerCase())).join('')

const alternateUpperCase = string =>
  [...string].map((char, index) => (index % 2 !== 0 ? char.toUpperCase() : char.toLowerCase())).join('')

const capitalize = s => [alternateCase(s), alternateUpperCase(s)]
*/

// Short Solution
const capitalize = s =>
  [0, 1].map(bool => [...s].map((char, i) => (i % 2 === bool ? char.toUpperCase() : char)).join(''))

// Function Export
module.exports = capitalize
