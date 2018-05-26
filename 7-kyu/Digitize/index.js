/* eslint unicorn/prefer-spread: 0 */

/*
  Title:
    Digitize

  Description:
    Given a non-negative integer, return an array / a list of the individual digits in order.

  Examples:
    123 => [1,2,3]

    1 => [1]

    8675309 => [8,6,7,5,3,0,9]

  Kata Link:
    https://www.codewars.com/kata/digitize

  Discuss Link:
    https://www.codewars.com/kata/digitize/discuss

  Solutions Link:
    https://www.codewars.com/kata/digitize/solutions
*/

// Long Solution
/*
const digitize = n =>
  String(n)
    .split('')
    .map(num => Number(num))
*/

// Short solution
const digitize = n => Array.from(String(n), num => Number(num))

// Function Export
module.exports = digitize
