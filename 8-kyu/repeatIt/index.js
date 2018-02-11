/*
  Title:
    repeatIt

  Description:
    Create a function that takes a string and an integer (n).

    The function should return a string that repeats the input string n number of times.

    If anything other than a string is passed in you should return "Not a string"

  Examples:
    "Hi", 2 --> "HiHi"
    1234, 5 --> "Not a string"

  Kata Link:
    https://www.codewars.com/kata/repeatit

  Discuss Link:
    https://www.codewars.com/kata/repeatit/discuss

  Solutions Link:
    https://www.codewars.com/kata/repeatit/solutions
*/

// Long Solution
const repeatIt = (str, n) =>
  typeof str === 'string' ? str.repeat(n) : 'Not a string'

// Function Export
module.exports = repeatIt
