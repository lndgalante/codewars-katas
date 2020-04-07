/*
  Title:
    Find all occurrences of an element in an array

  Description:
    Given an array (a list in Python) of integers and an integer n, find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.
    If n is not in the given array, return an empty array [].
    Assume that n and all values in the given array will always be integers.

  Examples:
    findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]

  Kata Link:
    https://www.codewars.com/kata/59a9919107157a45220000e1

  Discuss Link:
    https://www.codewars.com/kata/59a9919107157a45220000e1/discuss

  Solutions Link:
    https://www.codewars.com/kata/59a9919107157a45220000e1/solutions
*/

// Long Solution
/*
const findAll = (array, n) => {
  return array
    .map((number, index) => (number === n ? index : undefined))
    .filter((number) => typeof number !== 'undefined')
}
*/

// Short Solution
const findAll = (array, n) => array.reduce((acc, number, index) => (number === n ? [...acc, index] : acc), [])

// Function Export
module.exports = findAll
