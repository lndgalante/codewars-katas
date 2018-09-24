/*
  Title:
    Is it a number?

  Description:
    Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

  Examples:
    Valid examples, should return true:
      isDigit("3")
      isDigit("  3  ")
      isDigit("-3.23")

    should return false:
      isDigit("3-4")
      isDigit("  3   5")
      isDigit("3 5")
      isDigit("zero")

  Kata Link:
    https://www.codewars.com/kata/is-it-a-number

  Discuss Link:
    https://www.codewars.com/kata/is-it-a-number/discuss

  Solutions Link:
    https://www.codewars.com/kata/is-it-a-number/solutions
*/

// Long Solution
const isDigit = s => Number(s) === parseFloat(s)

// Function Export
module.exports = isDigit
