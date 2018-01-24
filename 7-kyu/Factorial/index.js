/*
  Title:
    Factorial

  Description:
    In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n.
    For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

    Write a function to calculate factorial for a given input.
    If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript).

    More details about factorial can be found here: http://en.wikipedia.org/wiki/Factorial

  Kata Link:
    https://www.codewars.com/kata/factorial

  Discuss Link:
    https://www.codewars.com/kata/factorial/discuss

  Solutions Link:
    https://www.codewars.com/kata/factorial/solutions
*/

// Long Solution
/*
function factorial(n) {
  if (n < 0 || n > 12) throw new RangeError('Range must be between 0 and 12')

  let result = 1
  for (let i = 1; i <= n; i++) result *= i

  return result
}
*/

// Short Solution
const factorial = n => {
  if (n < 0 || n > 12) throw new RangeError('Range must be between 0 and 12')
  return n > 1 ? n * factorial(n - 1) : 1
}

// Even that the above solution is shorter,
// recursion in JavaScript is slower than using a for-loop

// Function Export
module.exports = factorial
