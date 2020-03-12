/*
  Title:
    Dominant array elements

  Description:
    An element in an array is dominant if it is greater than all elements to its right.
    You will be given an array and your task will be to return a list of all dominant elements.

  Examples:
    solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right.
    solve([5,4,3,2,1]) = [5,4,3,2,1]

  Notes:
    Notice that the last element is always included.

  Kata Link:
    https://www.codewars.com/kata/dominant-array-elements

  Discuss Link:
    https://www.codewars.com/kata/dominant-array-elements/discuss

  Solutions Link:
    https://www.codewars.com/kata/dominant-array-elements/solutions
*/

// Long Solution
/*
const solve = arr => [
  ...new Set(arr.filter((number, index, arr) => arr.slice(index + 1).every(rightNumber => number >= rightNumber))),
]
*/

// Short Solution
/*
const solve = arr => arr.filter((number, index, arr) => arr.slice(index + 1).every(rightNumber => number > rightNumber))
*/

// Shortest Solution
const solve = array => array.filter((number, index) => number > Math.max(...array.slice(index + 1)))

// Function Export
module.exports = solve
