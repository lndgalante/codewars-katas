/*
  Title:
    All unique

  Description:
    Write a program to determine if a string contains all unique characters. Return true if it does and false otherwise.

    The string may contain any of the 128 ASCII characters.

  Kata Link:
    https://www.codewars.com/kata/all-unique

  Discuss Link:
    https://www.codewars.com/kata/all-unique/discuss

  Solutions Link:
    https://www.codewars.com/kata/all-unique/solutions
*/

// Long Solution
const hasUniqueChars = string => new Set(string).size === string.length

// Function Export
module.exports = hasUniqueChars
