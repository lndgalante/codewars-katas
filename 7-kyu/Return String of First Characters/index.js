/*
  Title:
    Return String of First Characters

  Description:
    In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

  Examples:
    "This Is A Test" ==> "TIAT"

  Kata Link:
    https://www.codewars.com/kata/return-string-of-first-characters

  Discuss Link:
    https://www.codewars.com/kata/return-string-of-first-characters/discuss

  Solutions Link:
    https://www.codewars.com/kata/return-string-of-first-characters/solutions
*/

// Long Solution
/*
const makeString = s =>
  s
    .split(' ')
    .map(([firstChar]) => firstChar)
    .join('')
*/

// Short Solution - RegExp: https://regexr.com/40ua6
const makeString = s => s.match(/\b\w/g).join('')

// Function Export
module.exports = makeString
