/*
  Title:
    Numbers to Letters

  Description:
    Given an array of numbers, you must return a string.
    The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc.
    You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

    All inputs will be valid.

  Kata Link:
    https://www.codewars.com/kata/numbers-to-letters

  Discuss Link:
    https://www.codewars.com/kata/numbers-to-letters/discuss

  Solutions Link:
    https://www.codewars.com/kata/numbers-to-letters/solutions
*/

// Long Solution
/*
const switcher = x => {
  const alphabet = Array.from({ length: 26 }).reduce(
    (dict, _, index) => ({ ...dict, [26 - index]: String.fromCharCode(index + 97) }),
    {}
  )
  const extraChars = { 27: '!', 28: '?', 29: ' ' }
  const dictionary = { ...alphabet, ...extraChars }

  return x.map(char => dictionary[char] || '').join('')
}
*/

// Short Solution
const switcher = x => x.reduce((word, number) => `${word}${' ?!abcdefghijklmnopqrstuvwxyz'[29 - number]}`, '')

// Function Export
module.exports = switcher
