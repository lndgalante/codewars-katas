/*
  Title:
    Powers of 3

  Description:
    Given a positive integer N, return the largest integer k such that 3^k < N.

  Examples:
    largestPower(3) = 0
    largestPower(4) = 1

  Notes:
    You may assume that the input to your function is always a positive integer.

  Kata Link:
    https://www.codewars.com/kata/powers-of-3

  Discuss Link:
    https://www.codewars.com/kata/powers-of-3/discuss

  Solutions Link:
    https://www.codewars.com/kata/powers-of-3/solutions
*/

// Long Solution
/*
const largestPower = n => {
  let k = 0
  while (3 ** k < n) k++

  return k - 1
}
*/

// Short Solution
const largestPower = n => Math.ceil(Math.log10(n) / Math.log10(3)) - 1

// Function Export
module.exports = largestPower
