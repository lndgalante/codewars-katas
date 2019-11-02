/*
  Title:
    noobCode 03: CHECK THESE LETTERS... see if letters in "String 1" are present in "String 2"

  Description:
    Write a function that checks if the letters in the second string are present in the first:

  Examples:
    letterCheck(["trances", "nectar"]) // true
    letterCheck(["compadres", "DRAPES"]) // true
    letterCheck(["parses", "parsecs"]) //false

  Notes:
    Function should not be case sensitive, as indicated in example #2.
    Both strings are presented as a single argument in the form of an array.

  Kata Link:
    https://www.codewars.com/kata/noobcode-03-check-these-letters-dot-dot-dot-see-if-letters-in-string-1-are-present-in-string-2

  Discuss Link:
    https://www.codewars.com/kata/noobcode-03-check-these-letters-dot-dot-dot-see-if-letters-in-string-1-are-present-in-string-2/discuss

  Solutions Link:
    https://www.codewars.com/kata/noobcode-03-check-these-letters-dot-dot-dot-see-if-letters-in-string-1-are-present-in-string-2/solutions
*/

// Long Solution
/*
const letterCheck = arr => {
  const [firstWord, secondWord] = arr.map(word => word.toLowerCase())
  const [firstWordChars, secondWordChars] = [[...firstWord], [...secondWord]]

  return secondWordChars.every(char => firstWordChars.includes(char))
}
*/

// Short Solution
const letterCheck = ([firstWord, secondWord]) => !new RegExp(`[^${firstWord}]`, 'gi').test(secondWord)

// Function Export
module.exports = letterCheck
