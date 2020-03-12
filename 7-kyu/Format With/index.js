/* eslint no-extend-native: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

/*
  Title:
    Format With

  Description:
    Write
    String.prototype.formatWith = function () {}
    that takes in a list of arguments and formats the string based off these arguments and indices.

  Examples:
    'Hello {0}'.formatWith('Codewars') ===  'Hello Codewars'
    '{0} + {0} = {1}'.formatWith('1','2') ===  '1 + 1 = 2'
    'Testing {1}'.formatWith('kata') === 'Testing {1}' // there is no arguments at position 1

  Kata Link:
    https://www.codewars.com/kata/format-with

  Discuss Link:
    https://www.codewars.com/kata/format-with/discuss

  Solutions Link:
    https://www.codewars.com/kata/format-with/solutions
*/

// Long Solution
/*
String.prototype.formatWith = function(...strings) {
  return this.replace(/\{(\d)\}/g, match => {
    const index = match.match(/\d/g)
    return strings[index] || match
  })
}
*/

// Short Solution
String.prototype.formatWith = function(...strings) {
  return this.replace(/{(\d)}/g, (match, index) => strings[index] || match)
}

// Function Export
module.exports = String
