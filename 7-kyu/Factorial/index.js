/*
  Title:
    Factorial

  Description:
    Yor task is to write function factorial
    https://en.wikipedia.org/wiki/Factorial

  Kata Link:
    https://www.codewars.com/kata/factorial-1

  Discuss Link:
    https://www.codewars.com/kata/factorial-1/discuss

  Solutions Link:
    https://www.codewars.com/kata/factorial-1/solutions
*/

// Long Solution
const factorial = n => (n > 0 ? n * factorial(n - 1) : 1)

// Function Export
module.exports = factorial
