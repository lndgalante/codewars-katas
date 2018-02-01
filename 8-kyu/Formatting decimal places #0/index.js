/*
  Title:
    Formatting decimal places #0

  Description:
    Each number should be formatted that it is rounded to two decimal places.
    You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

  Examples:
    5.5589 is rounded 5.56
    3.3424 is rounded 3.34

  Kata Link:
    https://www.codewars.com/kata/formatting-decimal-places-number-0

  Discuss Link:
    https://www.codewars.com/kata/formatting-decimal-places-number-0/discuss

  Solutions Link:
    https://www.codewars.com/kata/formatting-decimal-places-number-0/solutions
*/

// Long Solution
const twoDecimalPlaces = n => Number(n.toFixed(2))

// Function Export
module.exports = twoDecimalPlaces
