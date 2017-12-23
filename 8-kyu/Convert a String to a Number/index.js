/*
  Title:
    Convert a String to a Number!

  Description:
    We need a function that can transform a string into a number.
    What ways of achieving this do you know?

  Examples:
    stringToNumber("1234") == 1234
    stringToNumber("605" ) == 605
    stringToNumber("1405") == 1405
    stringToNumber("-7"  ) == -7

  Notes:
    Don't worry, all inputs will be strings, and every string is a perfectly
    valid representation of an integral number.

  Kata Link:
    https://www.codewars.com/kata/convert-a-string-to-a-number

  Discuss Link:
    https://www.codewars.com/kata/convert-a-string-to-a-number/discuss

  Solutions Link:
    https://www.codewars.com/kata/convert-a-string-to-a-number/solutions
*/

// Long Solution
// function stringToNumber(str) {
//   return Number(str)
// }

// Short Solution
const stringToNumber = str => Number(str)

// Function Export
module.exports = stringToNumber
