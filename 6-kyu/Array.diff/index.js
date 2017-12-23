/*
  Title:
    Array.diff

  Description:
    Your goal in this kata is to implement an difference function, which subtracts one list from another.

    It should remove all values from list a, which are present in list b.

  Examples:
    array_diff([1, 2],[1]) == [2]
    array_diff([1, 2, 2, 2, 3],[2]) == [1, 3]

  Kata Link:
    https://www.codewars.com/kata/array-dot-diff

  Discuss Link:
    https://www.codewars.com/kata/array-dot-diff/discuss

  Solutions Link:
    https://www.codewars.com/kata/array-dot-diff/solutions
*/

// Solution with Lodash
/*
const _ = require('lodash')

function array_diff(a, b) {
  return _.difference(a, b)
}
*/

// Long Solution
/*
function array_diff(a, b) {
  const result = []

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] !== b[j]) result.push(a[i])
    }
  }

  return result
}
*/

// Short Solution
const array_diff = (a, b) => a.filter(x => !b.includes(x))

// Function Export
module.exports = array_diff
