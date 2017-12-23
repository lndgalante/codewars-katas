/*
  Title:
    Convert a Number to a String!

  Description:
    We need a function that can transform a number into a string.

    What ways of achieving this do you know?

  Examples:
    numberToString(123); // returns '123';
    numberToString(999); // returns '999';

  Kata Link:
    https://www.codewars.com/kata/convert-a-number-to-a-string

  Discuss Link:
    https://www.codewars.com/kata/convert-a-number-to-a-string/discuss

  Solutions Link:
    https://www.codewars.com/kata/convert-a-number-to-a-string/solutions
*/

// Long Solution
/*
function numberToString(num) {
  return String(num)
}
*/

// Short Solution
const numberToString = num => `${num}`

// Function Export
module.exports = numberToString
