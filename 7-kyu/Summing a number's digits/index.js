/*
  Title:

  Description:
    Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

    Let's assume that all numbers in the input will be integer values.

  Examples:
    sumDigits(10);
      // Returns 1
    sumDigits(99);
      // Returns 18
    sumDigits(-32);
      // Returns 5

  Notes:
    Let's assume that all numbers in the input will be integer values.

  Kata Link:
    https://www.codewars.com/kata/summing-a-numbers-digits

  Discuss Link:
    https://www.codewars.com/kata/summing-a-numbers-digits/discuss

  Solutions Link:
    https://www.codewars.com/kata/summing-a-numbers-digits/solutions
*/

// Long Solution
/*
const sumDigits = number =>
  String(number)
    .match(/\d/gi)
    .reduce((total, value) => total + Number(value), 0)
*/

// Alternative Solution
const sumDigits = n =>
  Math.abs(n)
    .toString()
    .split('')
    .reduce((total, num) => total + Number(num), 0)

// Function Export
module.exports = sumDigits
