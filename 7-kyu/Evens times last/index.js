/*
  Title:
    Evens times last

  Description:
    Given an array of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.
    If the array is empty, you should return 0.

  Kata Link:
    https://www.codewars.com/kata/evens-times-last

  Discuss Link:
    https://www.codewars.com/kata/evens-times-last/discuss

  Solutions Link:
    https://www.codewars.com/kata/evens-times-last/solutions
*/

// Long Solution
const evenLast = numbers => {
  if (numbers.length === 0) return 0

  const lastInteger = numbers[numbers.length - 1]
  const sum = numbers.reduce((acc, number, index) => (index % 2 === 0 ? acc + number : acc), 0)

  return sum * lastInteger
}

// Function Export
module.exports = evenLast
