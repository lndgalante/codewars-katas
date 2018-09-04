/* eslint no-extend-native: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

/*
  Title:
    esreveR gnirtS

  Description:
    Create a function called reverse for the String prototype that will allow the following functionality:
    - "String".reverse();// => returns "gnirtS"
    - "Super awesome string".reverse();// => returns "gnirts emosewa repuS"

  Notes:
    The reverse function should NOT modify the original string.

  Kata Link:
    https://www.codewars.com/kata/esrever-gnirts

  Discuss Link:
    https://www.codewars.com/kata/esrever-gnirts/discuss

  Solutions Link:
    https://www.codewars.com/kata/esrever-gnirts/solutions
*/

// Long Solution
String.prototype.reverse = function() {
  return this.split('')
    .reverse()
    .join('')
}

// Function Export
module.exports = String
