/*
  Title:
    Find the unique number

  Description:
    There is an array with some numbers. All numbers are equal except for one. Try to find it!

    It’s guaranteed that array contains more than 3 numbers.

  Examples:
    findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
    findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

  Notes:
    The tests contain some very huge arrays, so think about performance.

  Kata Link:
    https://www.codewars.com/kata/find-the-unique-number-1

  Discuss Link:
    https://www.codewars.com/kata/find-the-unique-number-1/discuss

  Solutions Link:
    https://www.codewars.com/kata/find-the-unique-number-1/solutions
*/

// Short Solution
const findUniq = arr =>
  arr.find(num => arr.indexOf(num) === arr.lastIndexOf(num))

// Function Export
module.exports = findUniq
