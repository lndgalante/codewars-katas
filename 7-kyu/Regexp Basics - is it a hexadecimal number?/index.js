/* eslint no-extend-native: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

/*
  Title:
    Regexp Basics - is it a hexadecimal number?

  Description:
    Implement String#hex_number? (in Java StringUtils.isHexNumber(String)),
    which should return true if given object is a hexadecimal number, false otherwise.

    Hexadecimal numbers consist of one or more digits from range 0-9 A-F (in any case), optionally prefixed by 0x.

  Kata Link:
    https://www.codewars.com/kata/regexp-basics-is-it-a-hexadecimal-number

  Discuss Link:
    https://www.codewars.com/kata/regexp-basics-is-it-a-hexadecimal-number/discuss

  Solutions Link:
    https://www.codewars.com/kata/regexp-basics-is-it-a-hexadecimal-number/solutions
*/

// Long Solution - https://regexr.com/49h41
String.prototype.hexNumber = function() {
  return /^(0x)?[0-9A-F]+$/i.test(this)
}

// Function Export
module.exports = String
