/* eslint no-extend-native: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

/*
  Title:
    Regexp Basics - is it all whitespace?

  Description:
    Implement String#whitespace?(str) (Ruby),
    String.prototype.whitespace(str) (JavaScript),
    String::whitespace(str) (CoffeeScript),
    or whitespace(str) (Python),
    which should return true/True if given object consists exclusively of zero or more whitespace characters, false/False otherwise.

  Kata Link:
    https://www.codewars.com/kata/regexp-basics-is-it-all-whitespace

  Discuss Link:
    https://www.codewars.com/kata/regexp-basics-is-it-all-whitespace/discuss

  Solutions Link:
    https://www.codewars.com/kata/regexp-basics-is-it-all-whitespace/solutions
*/

// Long Solution
String.prototype.whitespace = function() {
  return /^\s*$/g.test(this)
}

// Function Export
module.exports = String
