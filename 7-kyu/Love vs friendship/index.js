/* eslint no-irregular-whitespace: 0 */

/*
  Title:
    Love vs friendship

  Description:
    If　a = 1, b = 2, c = 3 ... z = 26

    Then l + o + v + e = 54

    and f + r + i + e + n + d + s + h + i + p = 108

    So friendship is twice stronger than love :-)

    The input will always be in lowercase and never be empty.

  Kata Link:
    https://www.codewars.com/kata/love-vs-friendship

  Discuss Link:
    https://www.codewars.com/kata/love-vs-friendship/discuss

  Solutions Link:
    https://www.codewars.com/kata/love-vs-friendship/solutions
*/

// Long Solution
/*
const wordsToMarks = string => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

  return string
    .split('')
    .map(char => alphabet.findIndex(letter => letter === char) + 1)
    .reduce((total, value) => total + value, 0)
}
*/

// Short Solution
const wordsToMarks = s =>
  [...s].reduce((total, char) => total + char.charCodeAt() - 96, 0)

// Function Export
module.exports = wordsToMarks
