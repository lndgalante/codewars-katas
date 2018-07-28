/*
  Title:
    Substituting Variables Into Strings: Padded Numbers

  Description:
    Complete the solution so that it returns a formatted string.
    The return value should equal "Value is VALUE" where value is a 5 digit padded number.

  Examples:
    solution(5) // should return "Value is 00005"

  Kata Link:
    https://www.codewars.com/kata/substituting-variables-into-strings-padded-numbers

  Discuss Link:
    https://www.codewars.com/kata/substituting-variables-into-strings-padded-numbers/discuss

  Solutions Link:
    https://www.codewars.com/kata/substituting-variables-into-strings-padded-numbers/solutions
*/

// Long Solution
/*
// Polyfill
String.prototype.padStart = function() {
  return `${Array.from({ length: 5 - this.length })
    .fill(0)
    .join('')}${this}`
}

const solution = value => `Value is ${String(value).padStart(value, '0')}`
 */

// Short Solution
const solution = value => `Value is ${`00000${value}`.slice(-5)}`

// Function Export
module.exports = solution
