/*
  Title:
    Sum of positive

  Description:
    You get an array of numbers, return the sum of all of the positives ones.

  Examples:
    [1,-4,7,12] => 1 + 7 + 12 = 20

  Notes:
    Array may be empty, in this case return 0.

  Kata Link:
    https://www.codewars.com/kata/sum-of-positive

  Discuss Link:
    https://www.codewars.com/kata/sum-of-positive/discuss

  Solutions Link:
    https://www.codewars.com/kata/sum-of-positive/solutions
*/

// Long Solution
/*
function positiveSum(arr) {
  return arr.reduce((a, b) => (Math.sign(b) === 1 ? a + b : a), 0)
}
*/

// Short Solution
const positiveSum = arr =>
  arr.reduce((a, b) => (Math.sign(b) === 1 ? a + b : a), 0)

// Function Export
module.exports = positiveSum
