/*
  Title:
    Convert number to reversed array of digits

  Description:
    Given a random number
    You have to return the digits of this number within an array in reverse order.

  Examples:
    348597 => [7, 9, 5, 8, 4, 3]

  Kata Link:
    https://www.codewars.com/kata/convert-number-to-reversed-array-of-digits

  Discuss Link:
    https://www.codewars.com/kata/convert-number-to-reversed-array-of-digits/discuss

  Solutions Link:
    https://www.codewars.com/kata/convert-number-to-reversed-array-of-digits/solutions
*/

// Long Solution
/*
function digitize(n) {
  return String(n)
    .split('')
    .reverse()
    .map(char => Number(char))
}
*/

// Short Solution
const digitize = n =>
  String(n)
    .split('')
    .reverse()
    .map(char => Number(char))

// Function Export
module.exports = digitize
