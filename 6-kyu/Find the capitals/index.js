/*
  Title:
    Find the capitals

  Description:
    Write a function that takes a single string (word) as argument.
    The function must return an ordered list containing the indexes of all capital letters in the string.

  Kata Link:
    https://www.codewars.com/kata/find-the-capitals-1

  Discuss Link:
    https://www.codewars.com/kata/find-the-capitals-1/discuss

  Solutions Link:
    https://www.codewars.com/kata/find-the-capitals-1/solutions
*/

// Long Solution
/*
function capitals(word) {
  return word
    .split('')
    .map(
      (char, pos) =>
        char === char.toUpperCase()
          ? { char, pos, isUpperCase: true }
          : { char, pos, isUpperCase: false }
    )
    .filter(({ isUpperCase }) => isUpperCase)
    .map(({ pos }) => pos)
}
*/

// Short Solution
const capitals = word =>
  word
    .replace(/[A-Z]/g, (_, i) => i)
    .split('')
    .map(char => Number(char))
    .filter(char => Number.isInteger(char))

// Function Export
module.exports = capitals
