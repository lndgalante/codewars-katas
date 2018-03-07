/*
  Title:
    Palindrome Strings

  Description:
    A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward.
    This includes capital letters, punctuation, and word dividers.

  Examples:
    "anna"   ==> true
    "walter" ==> false
    12321    ==> true
    123456   ==> false

  Kata Link:
    https://www.codewars.com/kata/palindrome-strings

  Discuss Link:
    https://www.codewars.com/kata/palindrome-strings/discuss

  Solutions Link:
    https://www.codewars.com/kata/palindrome-strings/solutions
*/

// Long Solution
const isPalindrome = line =>
  String(line) ===
  String(line)
    .split('')
    .reverse()
    .join('')

// Function Export
module.exports = isPalindrome
