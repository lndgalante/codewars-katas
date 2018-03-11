/*
  Title:
    Sum Mixed Array

  Description:
    Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

    Return your answer as a number.

  Kata Link:
    https://www.codewars.com/kata/sum-mixed-array

  Discuss Link:
    https://www.codewars.com/kata/sum-mixed-array/discuss

  Solutions Link:
    https://www.codewars.com/kata/sum-mixed-array/solutions
*/

// Long Solution
const sumMix = x => x.reduce((total, value) => total + Number(value), 0)

// Function Export
module.exports = sumMix
