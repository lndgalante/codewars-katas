/*
  Title:
    Thinkful - String Drills: Repeater

  Description:
    Write a class function named repeat() that takes two arguments (a string and a long integer),
    and returns a new string where the input string is repeated that many times.

  Examples:
    Repeater.repeat("a", 5)

    should return

    "aaaaa"

  Kata Link:
    https://www.codewars.com/kata/thinkful-string-drills-repeater

  Discuss Link:
    https://www.codewars.com/kata/thinkful-string-drills-repeater/discuss

  Solutions Link:
    https://www.codewars.com/kata/thinkful-string-drills-repeater/solutions
*/

// Long Solution
const repeater = (string, n) => string.repeat(n)

// Function Export
module.exports = repeater
