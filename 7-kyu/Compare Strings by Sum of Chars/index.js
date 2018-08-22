/*
  Title:
    Compare Strings by Sum of Chars

  Description:
    Compare two strings by comparing the sum of their values (ASCII character code).

    - For comparing treat all letters as UpperCase
    - null/NULL/Nil/None should be treated as empty strings
    - If the string contains other characters than letters, treat the whole string as it would be empty

    Your method should return true, if the strings are equal and false if they are not equal.

  Examples:
    "AD", "BC"  -> equal
    "AD", "DD"  -> not equal
    "gf", "FG"  -> equal
    "zz1", ""   -> equal (both are considered empty)
    "ZzZz", "ffPFF" -> equal
    "kl", "lz"  -> not equal
    null, ""    -> equal

  Kata Link:
    https://www.codewars.com/kata/compare-strings-by-sum-of-chars

  Discuss Link:
    https://www.codewars.com/kata/compare-strings-by-sum-of-chars/discuss

  Solutions Link:
    https://www.codewars.com/kata/compare-strings-by-sum-of-chars/solutions
*/

// Long Solution
const normalize = string =>
  !string || string.match(/[^a-z]/i) ? '' : string.toUpperCase()

const asciiSum = (string = '') =>
  normalize(string)
    .toUpperCase()
    .split('')
    .reduce((total, value) => total + value.charCodeAt(0), 0)

const compare = (s1 = '', s2 = '') => asciiSum(s1) === asciiSum(s2)

// Function Export
module.exports = compare
