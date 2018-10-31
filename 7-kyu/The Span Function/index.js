/*
  Title:
    The Span Function

  Description:
    The span function is a good one to know.
    It accepts an array and a predicate function and returns two arrays.
    The first array contains all the elements of the argument array up to the item that caused the first failure of the predicate.
    The second returned array contains the rest of the original array.
    The original array is not modified.

  Examples:
    function isEven (x) {
      return Math.abs(x) % 2 === 0;
    }

    var arr = [2,4,6,1,8,10];

    // This is true
    span(arr, isEven) === [[2,4,6],[1,8,10]]

  Kata Link:
    https://www.codewars.com/kata/the-span-function

  Discuss Link:
    https://www.codewars.com/kata/the-span-function/discuss

  Solutions Link:
    https://www.codewars.com/kata/the-span-function/solutions
*/

// Long Solution
/*
const span = (arr, predicate) => {
  let index
  const firstArray = []

  for (let i = 0; i < arr.length; i++) {
    const number = arr[i]

    if (!predicate(number)) {
      index = i
      break
    }

    firstArray.push(number)
  }

  const secondArray = index !== undefined ? arr.slice(index) : []

  return [firstArray, secondArray]
}
*/

// Short Solution
/* const span = (arr, predicate) => {
  let i = 0

  return arr.reduce(
    (result, value) => {
      result[(i = i || +!predicate(value))].push(value)
      return result
    },
    [[], []]
  )
}
*/

// Ramda Solution
const R = require('ramda')

const span = (arr, predicate) => [
  R.takeWhile(predicate, arr),
  R.dropWhile(predicate, arr),
]

// Function Export
module.exports = span
