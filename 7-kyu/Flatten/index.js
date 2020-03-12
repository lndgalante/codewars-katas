/*
  Title:
    Flatten

  Description:
    Write a function that flattens an Array of Array objects into a flat Array.
    Your function must only do one level of flattening.

  Examples:
    flatten([1,2,3])
      // => [1,2,3]
    flatten([[1,2,3],["a","b","c"],[1,2,3]])
      // => [1,2,3,"a","b","c",1,2,3]
    flatten([[[1,2,3]]])
      // => [[1,2,3]]

  Kata Link:
    https://www.codewars.com/kata/flatten-1

  Discuss Link:
    https://www.codewars.com/kata/flatten-1/discuss

  Solutions Link:
    https://www.codewars.com/kata/flatten-1/solutions
*/

// Short Solution
const flatten = array => array.reduce((a, v) => a.concat(v), [])

// Function Export
module.exports = flatten
