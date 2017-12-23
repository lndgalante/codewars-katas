/*
  Title:
    Replace With Alphabet Position

  Description:
    In this kata you are required to, given a string, replace every letter with its position in the alphabet.

    If anything in the text isn't a letter, ignore it and don't return it.
    a being 1, b being 2, etc.

  Examples:
    alphabet_position("The sunset sets at twelve o' clock.")
    Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" as a string.

  Kata Link:
    https://www.codewars.com/kata/replace-with-alphabet-position

  Discuss Link:
    https://www.codewars.com/kata/replace-with-alphabet-position/discuss

  Solutions Link:
    https://www.codewars.com/kata/replace-with-alphabet-position/solutions
*/

// Long Solution
/*
function alphabetPosition(text) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const alph = {}
  for (let i = 0; i < alphabet.length; i++) alph[alphabet[i]] = i + 1

  const result = text
    .split('')
    .map(char => alph[char.toLowerCase()] || '')
    .filter(char => char !== '')
    .join(' ')

  return result
}
*/

// Short Solution
const alphabetPosition = text =>
  text
    .toUpperCase()
    .replace(/[^A-Z]/g, '')
    .split('')
    .map(ch => ch.charCodeAt(0) - 64)
    .join(' ')

// Function Export
module.exports = alphabetPosition
