/*
  Title:
    Count the Characters

  Description:
    The goal of this kata is to write a function that takes two inputs: a string and a character.
    The function will count the number of times that character appears in the string.
    The count is case insensitive.

  Examples:
    countChar("fizzbuzz","z") => 4
    countChar("Fancy fifth fly aloof","f") => 5

  Notes:
    The character can be any alphanumeric character.

  Kata Link:
    https://www.codewars.com/kata/count-the-characters

  Discuss Link:
    https://www.codewars.com/kata/count-the-characters/discuss

  Solutions Link:
    https://www.codewars.com/kata/count-the-characters/solutions
*/

// Long Solution
const countChar = (string, char) =>
  (string.match(new RegExp(char, 'gi')) || []).length

// Function Export
module.exports = countChar
