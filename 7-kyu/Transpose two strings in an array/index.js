/*
  Title:
    Transpose two strings in an array

  Description:
    You will be given an array that contains two strings.
    Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

  Examples:
    e.g. transposeTwoStrings(['Hello','World']);

    should return

    H W
    e o
    l r
    l l
    o d

  Notes:
    - There should be one space in between the two characters
    - You don't have to modify the case (i.e. no need to change to upper or lower)
    - If one string is longer than the other, there should be a space where the character would be

  Kata Link:
    https://www.codewars.com/kata/transpose-two-strings-in-an-array

  Discuss Link:
    https://www.codewars.com/kata/transpose-two-strings-in-an-array/discuss

  Solutions Link:
    https://www.codewars.com/kata/transpose-two-strings-in-an-array/solutions
*/

// Long Solution
const transposeTwoStrings = arr => {
  const [firstString, secondString] = arr
  const longestLength = Math.max(...arr.map(({ length }) => length))

  return Array.from({ length: longestLength }, (_, index) => {
    const firstStringChar = firstString[index] ? firstString[index] : ' '
    const secondStringChar = secondString[index] ? secondString[index] : ' '

    return `${firstStringChar} ${secondStringChar}`
  }).join('\n')
}

// Function Export
module.exports = transposeTwoStrings
