/*
  Title:
    Number of trailing zeros of N!

  Description:
    Write a program that will calculate the number of trailing zeros in a factorial of a given number.

    N! = 1 * 2 * 3 * ... * N

    Be careful 1000! has 2568 digits...

    For more info, see: http://mathworld.wolfram.com/Factorial.html

  Examples:
    zeros(6) = 1
    # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

    zeros(12) = 2
    # 12! = 479001600 --> 2 trailing zeros

  Notes:
  You're not meant to calculate the factorial. Find another way to find the number of zeros.

  Kata Link:
    https://www.codewars.com/kata/number-of-trailing-zeros-of-n

  Discuss Link:
    https://www.codewars.com/kata/number-of-trailing-zeros-of-n/discuss

  Solutions Link:
    https://www.codewars.com/kata/number-of-trailing-zeros-of-n/solutions
*/

// Long Solution
/* function zeros(n) {
  let zeros = 0

  for (let i = 5; n / i >= 1; i *= 5) {
    zeros += n / i
  }

  return Math.trunc(zeros)
} */

// Alternative Solution
const zeros = n => {
  let zeros = 0

  while (n > 0) {
    n = Math.floor(n / 5)
    zeros += n
  }

  return zeros
}

// Function Export
module.exports = zeros
