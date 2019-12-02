/* eslint no-implicit-coercion: 0 */

/*
  Title:
    Rotate to the max

  Description:
    Given a number, return the maximum value by rearranging its digits.

  Examples:
    (123) => 321
    (786) => 876
    ("001") => 100
    (999) => 999
    (10543) => 54310

    ^Note the number may be given as a string

  Kata Link:
    https://www.codewars.com/kata/rotate-to-the-max

  Discuss Link:
    https://www.codewars.com/kata/rotate-to-the-max/discuss

  Solutions Link:
    https://www.codewars.com/kata/rotate-to-the-max/solutions
*/

// Long Solution
/*
const rotateToMax = n =>
  Number(
    n
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join('')
  )
*/

// Short Solution
const rotateToMax = n => +[...String(n)].sort((a, b) => b - a).join('')

// Function Export
module.exports = rotateToMax
