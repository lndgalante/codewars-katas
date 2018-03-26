/*
  Title:
    Be Concise III - Sum Squares

  Description:
    You are given a program sumSquares that takes an array as input and returns the sum of the squares of each item in an array.
    Shorten the code such that it meets the requirements.

  Examples:
    sumSquares([1,2,3,4,5]) === 55
      // 1 ** 2 + 2 ** 2 + 3 ** 2 + 4 ** 2 + 5 ** 2
    sumSquares([7,3,9,6,5]) === 200
    sumSquares([11,13,15,18,2]) === 843

  Notes:
    Try researching about built-in Array methods; they may help shorten your code a lot

  Kata Link:
    https://www.codewars.com/kata/be-concise-iii-sum-squares

  Discuss Link:
    https://www.codewars.com/kata/be-concise-iii-sum-squares/discuss

  Solutions Link:
    https://www.codewars.com/kata/be-concise-iii-sum-squares/solutions
*/

// Long Solution
const sumSquares = array => array.reduce((total, num) => total + num ** 2, 0)

// Function Export
module.exports = sumSquares
