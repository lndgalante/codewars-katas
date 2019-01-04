/*
  Title:
    Simple string characters

  Description:
    In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

  Examples:
    solve("*'&ABCDabcde12345") = [4,5,5,3].
    --the order is: uppercase letters, lowercase, numbers and special characters.

  Kata Link:
    https://www.codewars.com/kata/simple-string-characters

  Discuss Link:
    https://www.codewars.com/kata/simple-string-characters/discuss

  Solutions Link:
    https://www.codewars.com/kata/simple-string-characters/solutions
*/

// Long Solution
const solve = s => [
  (s.match(/[A-Z]/g) || []).length,
  (s.match(/[a-z]/g) || []).length,
  (s.match(/\d/g) || []).length,
  (s.match(/\W/g) || []).length,
]

// Function Export
module.exports = solve
