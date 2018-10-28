/*
  Title:
    Numbers in strings

  Description:
    In this Kata, you will be given a string that has lowercase letters and numbers.
    Your task is to compare the number groupings and return the largest number.

  Examples:
    For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

  Kata Link:
    https://www.codewars.com/kata/numbers-in-strings

  Discuss Link:
    https://www.codewars.com/kata/numbers-in-strings/discuss

  Solutions Link:
    https://www.codewars.com/kata/numbers-in-strings/solutions
*/

// Long Solution
const solve = s => Math.max(...s.match(/\d+/g))

// Function Export
module.exports = solve
