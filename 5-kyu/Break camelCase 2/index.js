/* eslint no-extend-native: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

/*
  Title:
    Break camelCase

  Description:
    Write simple .camelCase method (camel_case function in PHP or CamelCase in C#) for strings. All words must have their first letter capitalized without spaces.

  Examples:
    "hello case".camelCase() => HelloCase
    "camel case word".camelCase() => CamelCaseWord

  Kata Link:
    https://www.codewars.com/kata/break-camelcase

  Discuss Link:
    https://www.codewars.com/kata/break-camelcase/discuss

  Solutions Link:
    https://www.codewars.com/kata/break-camelcase/solutions
*/

String.prototype.camelCase = function() {
  return this.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

// Function Export
module.exports = String.prototype.camelCase
