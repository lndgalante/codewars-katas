/*
  Title:
    Power of two

  Description:
    Complete the function that determines if a given number is a power of two.

    A power of two is a number of the form 2n where n is an integer,
    i.e. the result of exponentiation with number two as the base and integer n as the exponent.

  Examples:
    isPowerOfTwo(1024)
      // -> true
    isPowerOfTwo(4096)
      // -> true
    isPowerOfTwo(333)
      // -> false
    isPowerOfTwo(2)
      // -> true
    isPowerOfTwo(5)
      // -> false

  Kata Link:
    https://www.codewars.com/kata/power-of-two

  Discuss Link:
    https://www.codewars.com/kata/power-of-two/discuss

  Solutions Link:
    https://www.codewars.com/kata/power-of-two/solutions
*/

// Long Solution
/*
const isPowerOfTwo = n => n <= 2 || Number.isInteger(Math.sqrt(n))
*/

// Recursive Solution
/*
const isPowerOfTwo = n => (n < 2 ? false : n == 2 ? true : isPowerOfTwo(n / 2))
*/

// Alternative Solution
const isPowerOfTwo = n => Number.isInteger(Math.log2(n))

// Function Export
module.exports = isPowerOfTwo
