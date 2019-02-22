/*
  Title:
    Move all vowels

  Description:
    Given a string as input, move all of its vowels to the end of the string, in the same order as they were before.
    Vowels are (in this kata): a, e, i, o, u

  Examples:
    "day"    ==>  "dya"
    "apple"  ==>  "pplae"

  Notes:
    All provided input strings are lowercase.

  Kata Link:
    https://www.codewars.com/kata/move-all-vowels

  Discuss Link:
    https://www.codewars.com/kata/move-all-vowels/discuss

  Solutions Link:
    https://www.codewars.com/kata/move-all-vowels/solutions
*/

// Long Solution
/*
const moveVowel = input => {
  const vowels = input.match(/[aeiou]/gi) || []
  const consonants = input.replace(/[aeiou]/gi, '')

  return [...consonants, ...vowels].join('')
}
*/

// Short Solution
const moveVowel = input => `${input.replace(/[aeoui]/g, '')}${input.replace(/[^aeoui]/g, '')}`

// Function Export
module.exports = moveVowel
