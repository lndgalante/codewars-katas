/*
  Title:
    Finding length of the sequence

  Description:
    As a part of this Kata, you need to find the length of the sequence in an array, between the first and the second occurance of a specified number.

    For example, for a given array arr

    [0, -3, 7, 4, 0, 3, 7, 9]

    Finding length between two 7s like

    `lengthOfSequence([0, -3, 7, 4, 0, 3, 7, 9], 7)`

    would return 5.

    For sake of simplicity, there will only be numbers (positive or negative) in the supplied array.

    If there are less or more than two occurances of the number to searched for, return 0.

  Kata Link:
    https://www.codewars.com/kata/finding-length-of-the-sequence

  Discuss Link:
    https://www.codewars.com/kata/finding-length-of-the-sequence/discuss

  Solutions Link:
    https://www.codewars.com/kata/finding-length-of-the-sequence/solutions
*/

// Long Solution
const lengthOfSequence = (array, n) => {
  const instances = array.filter(number => number === n).length
  if (instances > 2) return 0

  const firstIndex = array.indexOf(n)
  const lastIndex = array.lastIndexOf(n)
  const sequenceLength = array.slice(firstIndex, lastIndex + 1).length

  return sequenceLength === 1 ? 0 : sequenceLength
}

// Function Export
module.exports = lengthOfSequence
