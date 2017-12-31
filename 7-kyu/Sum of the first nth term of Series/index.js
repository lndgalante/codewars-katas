/*
  Title:
    Sum of the first nth term of Series

  Description:
    Your task is to write a function which returns the sum of following series upto nth term(parameter).

    Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

    * You need to round the answer to 2 decimal places and return it as String.
    * If the given value is 0 then it should return 0.00
    * You will only be given Natural Numbers as arguments.

  Examples:
    SeriesSum(1) => 1 = "1.00"
    SeriesSum(2) => 1 + 1/4 = "1.25"
    SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"

  Kata Link:
    https://www.codewars.com/kata/sum-of-the-first-nth-term-of-series

  Discuss Link:
    https://www.codewars.com/kata/sum-of-the-first-nth-term-of-series/discuss

  Solutions Link:
    https://www.codewars.com/kata/sum-of-the-first-nth-term-of-series/solutions
*/

// Long Solution
/*
function seriesSum(n) {
  if (n === 0) return '0.00'

  let result = 1

  for (let i = 4; i <= n * 3; i = i + 3) {
    result += 1 / i
  }

  return result.toFixed(2)
}
*/

// Short Solution
const seriesSum = n =>
  Array(n)
    .fill(0)
    .map((_, i) => 3 * i + 1)
    .reduce((total, next) => total + 1 / next, 0)
    .toFixed(2)

// Function Export
module.exports = seriesSum
