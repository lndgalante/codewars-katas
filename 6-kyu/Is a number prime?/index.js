/*
  Title:
    Is a number prime?

  Description:
    Define a function isPrime/is_prime() that takes one integer argument
    and returns true/True or false/False depending on if the integer is a prime.

    Per Wikipedia, a prime number (or a prime) is a natural number greater
    than 1 that has no positive divisors other than 1 and itself.

  Examples:
    isPrime(5) => true

  Notes:
    * You can assume you will be given an integer input.
    * You can not assume that the integer will be only positive.
      You may be given negative numbers as well (or 0).


  Kata Link:
    https://www.codewars.com/kata/is-a-number-prime

  Discuss Link:
    https://www.codewars.com/kata/is-a-number-prime/discuss

  Solutions Link:
    https://www.codewars.com/kata/is-a-number-prime/solutions
*/

// Long Solution
/*
const checkPrime = (divisors, num) =>
  divisors.length === 2 && divisors.includes(1) && divisors.includes(num)

function isPrime(num) {
  if (!Number.isInteger(num) && num <= 1) return false

  const divisors = []

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) divisors.push(i)
  }

  if (checkPrime(divisors, num)) return true

  return false
}
*/

// Short Solution
const isPrime = number => {
  for (let i = 2; i < number; i++) if (number % i === 0) return false
  return number >= 2
}

// Function Export
module.exports = isPrime
