/*
  Title:
    Recursion #1 - Factorial

  Description:
    In mathematics, the factorial of a non-negative integer n, denoted by n!,
    is the product of all positive integers less than or equal to n.

    For example,
    5! = 5 * 4 * 3 * 2 * 1 = 120.

    The value of 0! is 1.

    #Your task

    You have to create the function factorial that receives n and returns n!.
     You have to use recursion.

  Kata Link:
    https://www.codewars.com/kata/recursion-number-1-factorial

  Discuss Link:
    https://www.codewars.com/kata/recursion-number-1-factorial/discuss

  Solutions Link:
    https://www.codewars.com/kata/recursion-number-1-factorial/solutions
*/

// Long Solution
const factorial = n => (n > 0 ? n * factorial(n - 1) : 1)

// Function Export
module.exports = factorial
