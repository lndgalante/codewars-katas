/*
  Title:
    Collatz Conjecture Length

  Description:
    The Collatz Conjecture states that for any natural number n, if n is even, divide it by 2.
    If n is odd, multiply it by 3 and add 1. If you repeat the process continously for n, n will eventually reach 1.

    For example, if n = 20, the resulting sequence will be:

    [20, 10, 5, 16, 8, 4, 2, 1]

    Write a program that will output the length of the Collatz Conjecture for any given n.
    In the example above, the output would be 8.

    For more reading see: http://en.wikipedia.org/wiki/Collatz_conjecture

  Kata Link:
    https://www.codewars.com/kata/collatz-conjecture-length

  Discuss Link:
    https://www.codewars.com/kata/collatz-conjecture-length/discuss

  Solutions Link:
    https://www.codewars.com/kata/collatz-conjecture-length/solutions
*/

// Long Solution
/*
const collatzNumber = n => (n % 2 === 0 ? n / 2 : n * 3 + 1)

const collatz = n => {
  const result = [n]
  let sequenceNumber = n

  while (sequenceNumber !== 1) {
    sequenceNumber = collatzNumber(sequenceNumber)
    result.push(sequenceNumber)
  }

  return result.length
}
*/

// Short Solution
const collatz = n =>
  n === 1 ? 1 : n % 2 === 0 ? 1 + collatz(n / 2) : 1 + collatz(3 * n + 1)

// Function Export
module.exports = collatz
