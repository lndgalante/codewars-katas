/* eslint no-extend-native: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

/*
  Title:
    Regexp Basics - is it a digit?

  Description:
    Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

  Kata Link:
    https://www.codewars.com/kata/regexp-basics-is-it-a-digit

  Discuss Link:
    https://www.codewars.com/kata/regexp-basics-is-it-a-digit/discuss

  Solutions Link:
    https://www.codewars.com/kata/regexp-basics-is-it-a-digit/solutions
*/

// Long Solution
String.prototype.digit = function() {
  return /^\d$/g.test(this)
}

// Function Export
module.exports = String
