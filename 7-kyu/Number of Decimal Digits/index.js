/*
  Title:
    Number of Decimal Digits

  Description:
    Determine number of decimal digits in an unsiged integer.
    For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits.
    Be careful to avoid overflows/underflows.

  Kata Link:
    https://www.codewars.com/kata/number-of-decimal-digits

  Discuss Link:
    https://www.codewars.com/kata/number-of-decimal-digits/discuss

  Solutions Link:
    https://www.codewars.com/kata/number-of-decimal-digits/solutions
*/

// Long Solution
const digits = n => String(n).length

// Function Export
module.exports = digits
