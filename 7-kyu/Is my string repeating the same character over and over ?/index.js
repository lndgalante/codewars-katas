/*
  Title:
    Is my string repeating the same character over and over ?

  Description:
    Your task is very simple: Write a function hasOneChar returning:

    - true if the given string contains the same character repeated all along the string
    - false otherwise.

  Examples:
    hasOneChar('aaaaa'); //true
    hasOneChar('aaaab'); //false
    hasOneChar('bbbbb'); //true
    hasOneChar('bbabb'); //false

  Notes:
    Of course, what comes in mind first is a loop. But the purpose of this Kata is to test your creativity.You have to achieve it without using any loops.
    Corner cases: the function hasOneChar should return true if the string contains one single character.

  Kata Link:
    https://www.codewars.com/kata/is-my-string-repeating-the-same-character-over-and-over

  Discuss Link:
    https://www.codewars.com/kata/is-my-string-repeating-the-same-character-over-and-over/discuss

  Solutions Link:
    https://www.codewars.com/kata/is-my-string-repeating-the-same-character-over-and-over/solutions
*/

// Long Solution
const hasOneChar = s => new Set(s).size === 1

// Function Export
module.exports = hasOneChar
