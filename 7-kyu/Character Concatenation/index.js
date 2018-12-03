/*
  Title:
    Character Concatenation

  Description:
    Given a string, you progressively need to concatenate the first letter from the left and the first letter to the right and "1",
    then the second letter from the left and the second letter to the right and "2", and so on.

    If the string's length is odd drop the central element.

  Examples:
    charConcat("abcdef")    == 'af1be2cd3'
    charConcat("abc!def")   == 'af1be2cd3' // same result

  Kata Link:
    https://www.codewars.com/kata/character-concatenation

  Discuss Link:
    https://www.codewars.com/kata/character-concatenation/discuss

  Solutions Link:
    https://www.codewars.com/kata/character-concatenation/solutions
*/

// Long Solution
/*
const charConcat = string => {
  const parsedString =
    string.length % 2 !== 0 ? `${string.slice(0, string.length / 2)}${string.slice(string.length / 2 + 1)}` : string

  return [...parsedString].reduce((result, char, index, array) => {
    if (index >= array.length / 2) return result
    return `${result}${char}${array[array.length - (index + 1)]}${index + 1}`
  }, '')
}
*/

// Short Solution
const charConcat = (string, length = string.length) =>
  [...string.slice(0, length / 2)].map((char, index) => char + string[length - 1 - index] + (index + 1)).join('')

// Function Export
module.exports = charConcat
