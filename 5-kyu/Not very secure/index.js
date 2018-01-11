/*
  Title:
    Not very secure

  Description:
      In this example you have to validate if a user input string is alphanumeric. The given string is not nil, so you don't have to check that.

    The string has the following conditions to be alphanumeric:
      * At least one character ("" is not valid)
      * Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
      * No whitespaces / underscore

  Kata Link:
    https://www.codewars.com/kata/not-very-secure

  Discuss Link:
    https://www.codewars.com/kata/not-very-secure/discuss

  Solutions Link:
    https://www.codewars.com/kata/not-very-secure/solutions
*/

// Long Solution
/*
function alphanumeric(string) {
  return /^[\da-z0-9]+$/gi.test(string)
}
*/

// Short Solution
const alphanumeric = string => /^[a-z\d]+$/gi.test(string)

// Function Export
module.exports = alphanumeric
