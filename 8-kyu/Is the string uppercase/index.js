/* eslint no-extend-native: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

/*
  Title:
    Is the string uppercase?

  Description:
    Create a method is_uppercase() to see whether the string is ALL CAPS.

  Examples:
    is_uppercase("c") == False
    is_uppercase("C") == True
    is_uppercase("hello I AM DONALD") == False
    is_uppercase("HELLO I AM DONALD") == True
    is_uppercase("ACSKLDFJSgSKLDFJSKLDFJ") == False
    is_uppercase("ACSKLDFJSGSKLDFJSKLDFJ") == True

  Notes:
    For simplicity, you will not be tested on the ability to handle corner cases (e.g. "%*&#()%&^#" or similar strings containing alphabetical characters at all) - an ALL CAPS (uppercase) string will simply be defined as one containing no lowercase letters.
    Therefore, according to this definition, strings with no alphabetical characters (like the one above) should return True.

  Kata Link:
    https://www.codewars.com/kata/is-the-string-uppercase

  Discuss Link:
    https://www.codewars.com/kata/is-the-string-uppercase/discuss

  Solutions Link:
    https://www.codewars.com/kata/is-the-string-uppercase/solutions
*/

// Long Solution
/*
String.prototype.isUpperCase = function() {
  return this.split('').every(char => char === char.toUpperCase())
}
*/

// Short Solution
String.prototype.isUpperCase = function() {
  return this.toString() === this.toUpperCase()
}

// Function Export
module.exports = String
