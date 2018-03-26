/*
  Title:
    Find the Integral

  Description:
    Create a function that finds the integral of the expression passed.

    In order to find the integral all you need to do is add one to the exponent (the second number), and divide the coefficient by that new number (the first number).

    In 3x^2, for example, the integral would be 1x^3 (we added 1 to the exponent, and divided the coefficient by that new number).

  Examples:
    integrate(3,2) // => "1x^3"
    integrate(9,5) // => "1.5x^6"

  Notes:
    Note that the output should be a string. Neither number will ever be 0.

  Kata Link:
    https://www.codewars.com/kata/find-the-integral

  Discuss Link:
    https://www.codewars.com/kata/find-the-integral/discuss

  Solutions Link:
    https://www.codewars.com/kata/find-the-integral/solutions
*/

// Long Solution
const integrate = (coefficient, exponent) =>
  `${coefficient / (exponent + 1)}x^${exponent + 1}`

// Function Export
module.exports = integrate
