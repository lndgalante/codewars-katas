/*
  Title:
    Double Sort

  Description:
    Simple enough this one - you will be given an array.
    The values in the array will either be numbers or strings, or a mix of both.
    You will not get an empty array, nor a sparse one.

    Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order.
    The values must maintain their original type.

    Note that numbers written as strings are strings and must be sorted with the other strings.

  Kata Link:
    https://www.codewars.com/kata/double-sort

  Discuss Link:
    https://www.codewars.com/kata/double-sort/discuss

  Solutions Link:
    https://www.codewars.com/kata/double-sort/solutions
*/

// Long Solution
/*
const dbSort = a => {
  const numbers = a.filter(el => typeof el === 'number').sort((a, b) => a - b)
  const strings = a.filter(el => typeof el === 'string').sort((a, b) => a.localeCompare(b))

  return [...numbers, ...strings]
}
*/

// Lodash Solution
/*
const _ = require('lodash')
const dbSort = a => _.sortBy(a, _.isString, _.identity)
*/

// Short Solution
const dbSort = a => [
  ...a.filter(element => typeof element === 'number').sort((a, b) => a - b),
  ...a.filter(element => typeof element === 'string').sort((a, b) => a.localeCompare(b)),
]

// Function Export
module.exports = dbSort
