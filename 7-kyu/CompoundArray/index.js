/*
  Title:
    CompoundArray

  Description:
    You have to create a method "compoundArray" which should take as input two int arrays of different length
    and return one int array with numbers of both arrays shuffled one by one.

  Examples:
    Input - {1,2,3,4,5,6} and {9,8,7,6}
    Output - {1,9,2,8,3,7,4,6,5,6}

  Kata Link:
    https://www.codewars.com/kata/compoundarray

  Discuss Link:
    https://www.codewars.com/kata/compoundarray/discuss

  Solutions Link:
    https://www.codewars.com/kata/compoundarray/solutions
*/

// Long Solution
/*
const compoundArray = (a, b) => {
  if (!a.length) return b
  if (!b.length) return a

  const result = []
  const longerArray = longestArray(a, b)

  for (let index = 0; index < longerArray.length; index++) {
    if (a.includes(a[index], index)) result.push(a[index])
    if (b.includes(b[index], index)) result.push(b[index])
  }

  return result
}

const longestArray = (a, b) =>
  a.length > b.length ? a : b.length > a.length ? b : a
*/

// Short Solution
const compoundArray = (a, b) => {
  if (a.length === 0) return b
  if (b.length === 0) return a

  const result = []

  for (let index = 0; index < Math.max(a.length, b.length); index++) {
    if (a[index] >= 0) result.push(a[index])
    if (b[index] >= 0) result.push(b[index])
  }

  return result
}

// Lodash Solution
/*
const _ = require('lodash')

const compoundArray = (a, b) =>
  _(a)
    .zip(b)
    .flatten()
    .pull(undefined)
    .valueOf()
*/

// Function Export
module.exports = compoundArray
