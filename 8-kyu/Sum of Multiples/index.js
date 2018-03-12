/*
  Title:
    Sum of Multiples

  Description:
    Your Job:
    Find the sum of the multiples of n i.e. less than m

    Keep in Mind:
    n and m are natural number
    note that the second argument m is excluded from the multiples

  Examples:
    sumMul(2,9)    should return 20
    sumMul(3,13)   should return 30
    sumMul(4,123)  should return 1860
    sumMul(4,-7)   should return INVALID

  Kata Link:
    https://www.codewars.com/kata/sum-of-multiples

  Discuss Link:
    https://www.codewars.com/kata/sum-of-multiples/discuss

  Solutions Link:
    https://www.codewars.com/kata/sum-of-multiples/solutions
*/

// Long Solution
/*
const sumMul = (n, m) => {
  if (n >= m) return 'INVALID'

  const multiples = []

  for (let i = n; i < m; i++) {
    if (i % n === 0) multiples.push(i)
  }

  return multiples.reduce((total, value) => total + value, 0)
}
*/

// Short Solution
const sumMul = (n, m) => {
  if (n >= m) return 'INVALID'

  const last = Math.ceil(m / n) * n - n
  return (last + n) * (last / n) / 2
}

// Function Export
module.exports = sumMul
