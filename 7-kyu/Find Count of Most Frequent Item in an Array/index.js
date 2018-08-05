/*
  Title:
    Find Count of Most Frequent Item in an Array

  Description:
    Complete the function to find the count of the most frequent item of an array.
    You can assume that input is an array of integers.
    For an empty array return 0

  Examples:
    mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3])
    // => 5

  Notes:
    The most frequent number in the array is -1 and it occurs 5 times.

  Kata Link:
    https://www.codewars.com/kata/find-count-of-most-frequent-item-in-an-array

  Discuss Link:
    https://www.codewars.com/kata/find-count-of-most-frequent-item-in-an-array/discuss

  Solutions Link:
    https://www.codewars.com/kata/find-count-of-most-frequent-item-in-an-array/solutions
*/

// Long Solution
/*
const mostFrequentItemCount = collection => {
  if (!collection.length) return 0

  const numberRepetitions = {}
  const repetitions = []

  collection.forEach(
    number => (numberRepetitions[number] = (numberRepetitions[number] || 0) + 1)
  )

  for (const key in numberRepetitions) repetitions.push(numberRepetitions[key])

  const maxRepetitions = Math.max(...repetitions)

  return maxRepetitions
}
*/

// Short Solution
/*
const mostFrequentItemCount = collection => {
  if (!collection.length) return 0

  const numberRepetitions = {}

  collection.forEach(
    number => (numberRepetitions[number] = (numberRepetitions[number] || 0) + 1)
  )

  const maxRepetitions = Math.max(...Object.values(numberRepetitions))

  return maxRepetitions
}
*/

// Lodash Solution
/*
const _ = require('lodash')

const mostFrequentItemCount = collection =>
  collection.length
    ? _(collection)
        .countBy()
        .values()
        .max()
        .valueOf()
    : 0
*/

// Shortest Solution
/* Object Values Polyfill
Object.values =
  Object.values ||
  function(o) {
    return Object.keys(o).map(function(k) {
      return o[k]
    })
  }
*/

const mostFrequentItemCount = collection =>
  collection.length
    ? Math.max(
        ...Object.values(
          collection.reduce((repetitions, number) => {
            repetitions[number] = (repetitions[number] || 0) + 1
            return repetitions
          }, {})
        )
      )
    : 0

// Function Export
module.exports = mostFrequentItemCount
