/*
  Title:
    Merge two arrays

  Description:
    Write a function that combines two arrays by alternatingly taking elements from each array in turn.

  Examples:
    [a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

    [1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]

  Notes:
    The arrays may be of different lengths, with at least one character/digit.
    One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).

    Inspired by  https://adriann.github.io/programming_problems.html

  Kata Link:
    https://www.codewars.com/kata/merge-two-arrays

  Discuss Link:
    https://www.codewars.com/kata/merge-two-arrays/discuss

  Solutions Link:
    https://www.codewars.com/kata/merge-two-arrays/solutions
*/

// Long Solution
const mergeArrays = (a, b) =>
  Array.from({ length: Math.max(a.length, b.length) }).reduce((result, _, index) => {
    if (a[index] && b[index]) return [...result, a[index], b[index]]
    if (a[index]) return [...result, a[index]]
    if (b[index]) return [...result, b[index]]
    return result
  }, [])

// Short Solution
/* const mergeArrays = (a, b) =>
  Array.from({ length: Math.max(a.length, b.length) }).flatMap((_, index) => {
    if (a[index] && b[index]) return [a[index], b[index]]
    if (a[index]) return a[index]
    if (b[index]) return b[index]
  })
*/

// Lodash Solution
/*
const { compact, flatten, zip } = require('lodash')

const mergeArrays = (a, b) => compact(flatten(zip(a, b)))
*/

// Function Export
module.exports = mergeArrays
