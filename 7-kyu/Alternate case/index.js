/*
  Title:
    Alternate case

  Description:
    Write function alternateCase which switch every letter in string from upper to lower and from lower to upper.

  Examples:
    Hello World -> hELLO wORLD

  Kata Link:
    https://www.codewars.com/kata/alternate-case

  Discuss Link:
    https://www.codewars.com/kata/alternate-case/discuss

  Solutions Link:
    https://www.codewars.com/kata/alternate-case/solutions
*/

// Long Solution
const isLowerCase = char => char === char.toLowerCase()

const alternateCase = s =>
  s
    .split('')
    .map(char => (isLowerCase(char) ? char.toUpperCase() : char.toLowerCase()))
    .join('')

// Function Export
module.exports = alternateCase
