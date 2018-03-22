/*
  Title:
    Sum The Strings

  Description:
    Create a function that takes 2 numbers in form of a string as an input, and outputs the sum (also as a string):
    If either input is an empty string, consider it as zero.
    If both inputs are empty, output "0".

  Examples:
    sumStr("4", "5")
      // should output "9"
    sumStr("34", "5")
      // should output "39"

  Kata Link:
    https://www.codewars.com/kata/sum-the-strings

  Discuss Link:
    https://www.codewars.com/kata/sum-the-strings/discuss

  Solutions Link:
    https://www.codewars.com/kata/sum-the-strings/solutions
*/

// Long Solution
const sumStr = (a, b) => `${Number(a) + Number(b)}`

// Function Export
module.exports = sumStr
