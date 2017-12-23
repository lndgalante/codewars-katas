/*
  Title:

  Description:
    Write a method that takes an array of consecutive (increasing) letters
    as input and that returns the missing letter in the array.

    You will always get an valid array. And it will be always exactly one letter be missing.
    The length of the array will always be at least 2.
    The array will always contain letters in only one case.

  Examples:
    ['a','b','c','d','f'] -> 'e'
    ['O','Q','R','S'] -> 'P'

  Notes:
    (Use the English alphabet with 26 letters!)

  Kata Link:
    https://www.codewars.com/kata/find-the-missing-letter

  Discuss Link:
    https://www.codewars.com/kata/find-the-missing-letter/discuss

  Solutions Link:
    https://www.codewars.com/kata/find-the-missing-letter/solutions
*/

// Long Solution
function findMissingLetter(array) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

  const isUpperCase = array[0] === array[0].toUpperCase()

  const beginAt = alphabet.findIndex(char => char === array[0].toLowerCase())

  const subset = alphabet.slice(beginAt, beginAt + array.length)

  if (isUpperCase) {
    return subset
      .filter(char => !array.includes(char.toUpperCase()))
      .join('')
      .toUpperCase()
  }

  return subset.filter(char => !array.includes(char)).join('')
}

// Function Export
module.exports = findMissingLetter
