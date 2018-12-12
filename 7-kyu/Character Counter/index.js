/*
  Title:
    Character Counter

  Description:
    You are going to be given a word. Your job will be to make sure that each character in that word has the exact same number of occurrences.
    You will return true if it is valid, or false if it is not.

    For example:
      "abcabc" is a valid word because 'a' appears twice, 'b' appears twice, and'c' appears twice.
      "abcabcd" is NOT a valid word because 'a' appears twice, 'b' appears twice, 'c' appears twice, but 'd' only appears once!
      "123abc!" is a valid word because all of the characters only appear once in the word.

    For this kata, capitals are considered the same as lowercase letters. Therefore: 'A' == 'a' .

    #Input A string (no spaces) containing [a-z],[A-Z],[0-9] and common symbols. The length will be 0 < string < 100.

    #Output true if the word is a valid word, or false if the word is not valid.

  Kata Link:
    https://www.codewars.com/kata/character-counter

  Discuss Link:
    https://www.codewars.com/kata/character-counter/discuss

  Solutions Link:
    https://www.codewars.com/kata/character-counter/solutions
*/

// Long Solution
/*
const lowerCase = string => string.toLowerCase()

const validateWord = s =>
  [...new Set(s)]
    .map(char => {
      const charRepetitions = [...s].reduce(
        (total, charToCompare) => (lowerCase(char) === lowerCase(charToCompare) ? total + 1 : total),
        0
      )
      return { char, charRepetitions }
    })
    .every(({ charRepetitions }, _, [firstChar]) => charRepetitions === firstChar.charRepetitions)
*/

// Short Solution - https://regexr.com/44qoj
const validateWord = s =>
  [...s.toLowerCase()]
    .sort()
    .join('')
    .match(/(.)\1*/g)
    .every((combination, _, [firstCombination]) => combination.length === firstCombination.length)

// Function Export
module.exports = validateWord
