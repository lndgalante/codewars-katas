/*
  Title:
    First non-repeating character

  Description:
    Write a function named firstNonRepeatingLetter† that takes a string input,
    and returns the first character that is not repeated anywhere in the string.

    For example, if given the input 'stress', the function should return 't',
    since the letter t only occurs once in the string, and occurs first in the string.

    As an added challenge, upper- and lowercase letters are considered the same character,
    but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

    If a string contains all repeating characters, it should return the empty string ("").

    † Note: the function is called firstNonRepeatingLetter for historical reasons,
    but your function should handle any Unicode character.

  Kata Link:
    https://www.codewars.com/kata/first-non-repeating-character

  Discuss Link:
    https://www.codewars.com/kata/first-non-repeating-character/discuss

  Solutions Link:
    https://www.codewars.com/kata/first-non-repeating-character/solutions
*/

// Short Solution
const firstNonRepeatingLetter = s => {
  const index = s
    .toLowerCase()
    .split('')
    .findIndex((char, _, s) => s.indexOf(char) === s.lastIndexOf(char))

  return index === -1 ? '' : s[index]
}

// Function Export
module.exports = firstNonRepeatingLetter
