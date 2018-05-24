/*
  Title:
    Sum of all the multiples of 3 or 5

  Description:
    Your task is to write function findSum.

    Upto and including n, this function will return the sum of all multiples of 3 and 5.

  Examples:
    findSum(5) should return 8 (3 + 5)

    findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

  Kata Link:
    https://www.codewars.com/kata/sum-of-all-the-multiples-of-3-or-5

  Discuss Link:
    https://www.codewars.com/kata/sum-of-all-the-multiples-of-3-or-5/discuss

  Solutions Link:
    https://www.codewars.com/kata/sum-of-all-the-multiples-of-3-or-5/solutions
*/

// Long Solution
const findSum = n =>
  Array.from({ length: n }, (_, index) => index + 1)
    .filter(num => num % 3 === 0 || num % 5 === 0)
    .reduce((total, value) => total + value, 0)

// Function Export
module.exports = findSum
