/*
  Title:
    Sort and Star

  Description:
    You will be given an vector of string(s).
    You must sort it alphabetically (case-sensitive!!) and then return the first value.

    The returned value must be a string, and have '***' between each of its letters.

  Kata Link:
    https://www.codewars.com/kata/sort-and-star

  Discuss Link:
    https://www.codewars.com/kata/sort-and-star/discuss

  Solutions Link:
    https://www.codewars.com/kata/sort-and-star/solutions
*/

// Long Solution
const twoSort = s =>
  s
    .sort()[0]
    .split('')
    .join('***')

// Function Export
module.exports = twoSort
