/* eslint no-extend-native: 0 */
/* eslint no-use-extend-native/no-use-extend-native: 0 */

/*
  Title:
    Capitalize first letter of a string

  Description:
    Write a method, capitalize(), such that when the method is called on a String,
    only the very first letter of the string is capitalized (if it is a letter).

  Examples:
    "string".capitalize() === "String"
    "hello World".capitalize() === "Hello World"
    "i love codewars".capitalize() === "I love codewars"
    "This sentence is already capitalized".capitalize() === "This sentence is already capitalized"
    "0123the first character of this sentence is not a letter".capitalize() === "0123the first character of this sentence is not a letter"

  Notes:
    For the purposes of this Kata, the following methods are disabled:
    - toUpperCase()
    - toLowerCase()

  Kata Link:
    https://www.codewars.com/kata/56c19316e8b139dff60006da

  Discuss Link:
    https://www.codewars.com/kata/56c19316e8b139dff60006da/discuss

  Solutions Link:
    https://www.codewars.com/kata/56c19316e8b139dff60006da/solutions
*/

// Long Solution
/*
String.prototype.capitalize = function() {
  const isLowerCaseChar = (char) => char.charCodeAt() >= 97 && char.charCodeAt() <= 122;
  const getUpperCaseChar = (char) => String.fromCharCode(char.charCodeAt() - 32);

  return [...this]
    .map((char, index) => (index === 0 && isLowerCaseChar(char) ? getUpperCaseChar(char) : char))
    .join('');
};
*/

// Short Solution - RegExr https://regexr.com/4sfd7
String.prototype.capitalize = function() {
  return this.replace(/^\D/, (firstLetter) => String.fromCharCode(firstLetter.charCodeAt(0) - 32));
};

// Function Export
module.exports = String;
