/*
  Title:
    Remove First and Last Character

  Description:
    It's pretty straightforward. Your goal is to create a function that removes
    the first and last characters of a string. You're given one parameter,
    except in C, where, to keep the difficulty at the level of the kata,
    you are given two parameters, the first a buffer with length exactly
    the same as the second parameter, the original string.
    You don't have to worry with strings with less than two characters.

  Kata Link:
    https://www.codewars.com/kata/remove-first-and-last-character

  Discuss Link:
    https://www.codewars.com/kata/remove-first-and-last-character/discuss

  Solutions Link:
    https://www.codewars.com/kata/remove-first-and-last-character/solutions
*/

// Long Solution
/*
function removeChar(str) {
  return str
    .split('')
    .slice(1, str.length - 1)
    .join('')
}
*/

// Short Solution
const removeChar = str =>
  str
    .split('')
    .slice(1, str.length - 1)
    .join('')

// Function Export
module.exports = removeChar
