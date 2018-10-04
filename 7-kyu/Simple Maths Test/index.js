/*
  Title:
    Simple Maths Test

  Description:
    Create a function which checks a number for three different properties.

        is the number prime?
        is the number even?
        is the number a multiple of 10?

    Each should return either true or false, which should be given as an array. Remark: The Haskell variant uses data Property.

  Examples:
    numberProperty(7)  // ==> [true,  false, false]
    numberProperty(10) // ==> [false, true,  true]

    The number will always be an integer, either positive or negative. Note that negative numbers cannot be primes, but they can be multiples of 10:

    numberProperty(-7)  // ==> [false, false, false]
    numberProperty(-10) // ==> [false, true,  true]

  Kata Link:
    https://www.codewars.com/kata/simple-maths-test

  Discuss Link:
    https://www.codewars.com/kata/simple-maths-test/discuss

  Solutions Link:
    https://www.codewars.com/kata/simple-maths-test/solutions
*/

// Long Solution
/*
const isPrime = n => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false
  }

  return n > 1
}

const isEven = n => n % 2 === 0

const isMultipleOfTen = n => n % 10 === 0

const numberProperty = n => [isPrime(n), isEven(n), isMultipleOfTen(n)]
*/

// Short Solution
const isPrime = n =>
  Array.from({ length: n }, (_, index) => index)
    .slice(2)
    .some(number => n % number === 0)
    ? false
    : n > 1

const numberProperty = n => [isPrime(n), n % 2 === 0, n % 10 === 0]

// Function Export
module.exports = numberProperty
