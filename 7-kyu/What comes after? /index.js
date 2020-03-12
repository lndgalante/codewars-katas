/*
  Title:
    What comes after?

  Description:
    You will be given two inputs: a string of words and a letter.For each string, return the alphabetic character after every instance of letter(case insensitive).

    If there is a number, punctuation or underscore following the letter, it should not be returned.

  Examples:
    If letter = 'r':
      comes_after("are you really learning Ruby?") # => "eenu"
      comes_after("Katy Perry is on the radio!")   # => "rya"
      comes_after("Pirates say arrrrrrrrr.")       # => "arrrrrrrr"
      comes_after("r8 your friend")                # => "i"Return an empty string if there are no instances of letter in the given string.

  Kata Link:
    https://www.codewars.com/kata/what-comes-after

  Discuss Link:
    https://www.codewars.com/kata/what-comes-after/discuss

  Solutions Link:
    https://www.codewars.com/kata/what-comes-after/solutions
*/

// Long Solution
/*
const comesAfter = (str, l) => {
  let result = ''
  const characters = [...str]

  for (let i = 0; i < characters.length; i++) {
    const character = characters[i]
    if (character.match(new RegExp(l, 'i')) && (characters[i + 1] || '').match(/[a-z]/gi)) result += characters[i + 1]
  }

  return result
}
*/

// Short Solution - https://regexr.com/4q4kk
const comesAfter = (string, l) => (string.match(new RegExp(`(?<=${l})[a-z]`, 'gi')) || []).join('')

// Function Export
module.exports = comesAfter
