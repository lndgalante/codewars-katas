/*
  Title:
    Formatting decimal places #1

  Description:
    Each floating-point number should be formatted that only the first two decimal places are returned.
    You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

    Don't round the numbers! Just cut them after two decimal places!

  Examples:
    Right examples:
      32.8493 is 32.84
      14.3286 is 14.32

    Incorrect examples (e.g. if you round the numbers):
      32.8493 is 32.85
      14.3286 is 14.33

  Kata Link:
    https://www.codewars.com/kata/formatting-decimal-places-number-1

  Discuss Link:
    https://www.codewars.com/kata/formatting-decimal-places-number-1/discuss

  Solutions Link:
    https://www.codewars.com/kata/formatting-decimal-places-number-1/solutions
*/

// Long Solution
/*
const twoDecimalPlaces = number => {
  const [integer, decimal] = String(number).split('.')
  return Number(`${integer}.${decimal.slice(0, 2)}`)
}
*/

// Short Solution
const twoDecimalPlaces = number => Math.trunc(number * 100) / 100

// Function Export
module.exports = twoDecimalPlaces
