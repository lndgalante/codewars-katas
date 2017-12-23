/*
  Title:
    Return Negative

  Description:
    In this simple assignment you are given a number and have to make it negative.
    But maybe the number is already negative?

  Examples:
    makeNegative(1); // return -1
    makeNegative(-5); // return -5
    makeNegative(0); // return 0

  Notes:
    The number can be negative already, in which case no change is required.
    Zero (0) can't be negative, see examples above.

  Kata Link:
    https://www.codewars.com/kata/return-negative

  Discuss Link:
    https://www.codewars.com/kata/return-negative/discuss

  Solutions Link:
    https://www.codewars.com/kata/return-negative/solutions
*/

// Long Solution
/*
function makeNegative(num) {
  return Math.sign(num) === 1 ? -num : num
}
*/

// Short Solution
const makeNegative = num => (Math.sign(num) === 1 ? -num : num)

// Function Export
module.exports = makeNegative
