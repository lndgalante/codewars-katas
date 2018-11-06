/* eslint no-extend-native: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

/*
  Title:
    Regexp Basics - is it a vowel?

  Description:
    Implement String#vowel? (in Java StringUtils.isVowel(String)), which should return true if given object is a vowel, false otherwise.

  Kata Link:
    https://www.codewars.com/kata/regexp-basics-is-it-a-vowel

  Discuss Link:
    https://www.codewars.com/kata/regexp-basics-is-it-a-vowel/discuss

  Solutions Link:
    https://www.codewars.com/kata/regexp-basics-is-it-a-vowel/solutions
*/

// Long Solution
String.prototype.vowel = function() {
  return /^[aeiou]{1}$/i.test(this)
}

// Function Export
module.exports = String
