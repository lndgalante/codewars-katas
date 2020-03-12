/*
  Title:
    Is every value in the array an array?

  Description:
    Is every value in the array an array?
    This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

    Examples:
    [[1],[2]] => true
    ['1','2'] => false
    [{1:1},{2:2}] => false

  Kata Link:
    https://www.codewars.com/kata/is-every-value-in-the-array-an-array

  Discuss Link:
    https://www.codewars.com/kata/is-every-value-in-the-array-an-array/discuss

  Solutions Link:
    https://www.codewars.com/kata/is-every-value-in-the-array-an-array/solutions
*/

// Long Solution
const arrayCheck = value => value.every(Array.isArray)

// Function Export
module.exports = arrayCheck
