/* eslint unicorn/prefer-spread: 0 */

/*
  Title:
    Powers of 2

  Description:
    Write a function powersOfTwo which will return list of all powers of 2 from 0 to n (where n is an exponent).

  Examples:
    n = 0 -> 2^0 -> [1]

    n = 1 -> 2^0, 2^1 -> [1,2]

    n = 2 -> 2^0, 2^1, 2^2 -> [1,2,4]

  Kata Link:
    https://www.codewars.com/kata/powers-of-2

  Discuss Link:
    https://www.codewars.com/kata/powers-of-2/discuss

  Solutions Link:
    https://www.codewars.com/kata/powers-of-2/solutions
*/

// Long Solution
const powersOfTwo = n => Array.from({ length: n + 1 }, (_, i) => 2 ** i)

// Function Export
module.exports = powersOfTwo
