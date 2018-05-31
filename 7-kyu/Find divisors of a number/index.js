/*
  Title:
    Find divisors of a number

  Description:
    Find the number of divisors of a positive integer n.

    Random tests go up to n = 500000.

  Examples:
    divisors 4  = 3 -- 1, 2, 4
    divisors 5  = 2 -- 1, 5
    divisors 12 = 6 -- 1, 2, 3, 4, 6, 12
    divisors 30 = 8 -- 1, 2, 3, 5, 6, 10, 15, 30

  Kata Link:
    https://www.codewars.com/kata/find-divisors-of-a-number

  Discuss Link:
    https://www.codewars.com/kata/find-divisors-of-a-number/discuss

  Solutions Link:
    https://www.codewars.com/kata/find-divisors-of-a-number/solutions
*/

// Long Solution
function getDivisorsCnt(n) {
  const totalDivisors = []

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) totalDivisors.push(i)
  }

  return totalDivisors.length
}

// Function Export
module.exports = getDivisorsCnt
