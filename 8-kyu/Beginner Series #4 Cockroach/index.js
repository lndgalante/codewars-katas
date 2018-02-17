/*
  Title:
    Beginner Series #4 Cockroach

  Description:
    The cockroach is one of the fastest insects.
    Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

  Examples:
    cockroachSpeed(1.08) == 30

  Notes:
    The input is a Real number (actual type is language dependent) and is >= 0.
    The result should be an Integer.

  Kata Link:
    https://www.codewars.com/kata/beginner-series-number-4-cockroach

  Discuss Link:
    https://www.codewars.com/kata/beginner-series-number-4-cockroach/discuss

  Solutions Link:
    https://www.codewars.com/kata/beginner-series-number-4-cockroach/solutions
*/

// Long Solution
const cockroachSpeed = s => Math.floor(s * (100000 / 3600))

// Function Export
module.exports = cockroachSpeed
