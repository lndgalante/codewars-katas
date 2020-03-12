/*
  Title:
    Wilson primes

  Description:
    Wilson primes satisfy the following condition. Let P represent a prime number.

    Then ((P-1)! + 1) / (P * P) should give a whole number.

    Your task is to create a function that returns true if the given number is a Wilson prime.

  Kata Link:
    https://www.codewars.com/kata/wilson-primes

  Discuss Link:
    https://www.codewars.com/kata/wilson-primes/discuss

  Solutions Link:
    https://www.codewars.com/kata/wilson-primes/solutions
*/

// Long Solution
const factorial = number => {
  if (number < 0) return -1
  if (number === 0) return 1

  return number * factorial(number - 1)
}

const amIWilson = p => Number.isInteger((factorial(p - 1) + 1) / (p * p))

// Function Export
module.exports = amIWilson
