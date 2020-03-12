/* eslint no-extend-native: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

/*
  Title:
    Regexp Basics - is it a letter?

  Description:
    Implement String#letter? (Ruby), StringUtils.isLetter(String) (Java), String.prototype.isLetter() (JavaScript)  or letter? (Clojure), which should return true if given object is a single ASCII letter (lower or upper case), false otherwise.

  Kata Link:
    https://www.codewars.com/kata/regexp-basics-is-it-a-letter

  Discuss Link:
    https://www.codewars.com/kata/regexp-basics-is-it-a-letter/discuss

  Solutions Link:
    https://www.codewars.com/kata/regexp-basics-is-it-a-letter/solutions
*/

// Long Solution
String.prototype.isLetter = function() {
  return /^[a-z]$/gi.test(this)
}

// Function Export
module.exports = String
