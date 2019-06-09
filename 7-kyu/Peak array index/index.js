/*
  Title:
    Peak array index

  Description:
    Given an array of ints,return the index such that the sum of the elements to the right of that index equals the sum of the elements to the left of that index.
    If there is no such index, return -1.

  Examples:
    peak([1,2,3,5,3,2,1]) = 3, because the sum of the elements at indexes 0,1,2 == sum of elements at indexes 4,5,6. We don't sum index 3.
    peak([1,12,3,3,6,3,1]) = 2
    peak([10,20,30,40]) = -1

  Kata Link:
    https://www.codewars.com/kata/peak-array-index

  Discuss Link:
    https://www.codewars.com/kata/peak-array-index/discuss

  Solutions Link:
    https://www.codewars.com/kata/peak-array-index/solutions
*/

// Long Solution
/*
function peak(arr) {
  for (let i = 0; i < arr.length; i++) {
    const sumToLeft = arr.slice(0, i).reduce((total, value) => total + value, 0)
    const sumToRight = arr.slice(i + 1).reduce((total, value) => total + value, 0)

    if (sumToLeft === sumToRight) return i
  }

  return -1
}
*/

// Short Solution
const sum = arr => arr.reduce((sum, num) => sum + num, 0)

const peak = arr => arr.findIndex((value, i, array) => sum(array.slice(0, i)) === sum(array.slice(i + 1)))

// Function Export
module.exports = peak
