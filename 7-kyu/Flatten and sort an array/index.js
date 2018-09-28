/*
  Title:
    Flatten and sort an array

  Description:\
    Given a two-dimensional array of integers,
    return the flattened version of the array with all the integers in the sorted (ascending) order.

  Examples:
    Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

  Notes:
    Please, keep in mind, that JavaScript is by default sorting objects alphabetically.
    For more information, please consult:
    http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well

  Kata Link:
    https://www.codewars.com/kata/flatten-and-sort-an-array

  Discuss Link:
    https://www.codewars.com/kata/flatten-and-sort-an-array/discuss

  Solutions Link:
    https://www.codewars.com/kata/flatten-and-sort-an-array/solutions
*/

// Long Solution
/*
const flattenAndSort = array =>
  array
    .reduce((result, subarray) => [...result, ...subarray], [])
    .sort((currentNumber, nextNumber) => currentNumber - nextNumber)
*/

// Short Solution
const flattenAndSort = array => [].concat(...array).sort((a, b) => a - b)

// Function Export
module.exports = flattenAndSort
