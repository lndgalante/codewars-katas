/* eslint no-return-assign: 0 */
/*
  Title:
    Average Array

  Description:
    Create a function that takes a 2D array as an input, and outputs another array that contains the average values for the numbers in the nested arrays at the corresponding indexes.

  Examples:
    [ [1, 2, 3, 4], [5, 6, 7, 8] ]  ==>  [3, 4, 5, 6]

    1st array: [1, 2, 3, 4]
    2nd array: [5, 6, 7, 8]
                |  |  |  |
                v  v  v  v
    average:   [3, 4, 5, 6]

    And another one:
    [ [2, 3, 9, 10, 7], [12, 6, 89, 45, 3], [9, 12, 56, 10, 34], [67, 23, 1, 88, 34] ]
    average: ==>  [22.5, 11, 38.75, 38.25, 19.5]

    1st array: [  2,   3,    9,   10,    7]
    2nd array: [ 12,   6,   89,   45,    3]
    3rd array: [  9,  12,   56,   10,   34]
    4th array: [ 67,  23,    1,   88,   34]
                  |    |     |     |     |
                  v    v     v     v     v
    average:   [22.5, 11, 38.75, 38.25, 19.5]

  Notes:
    The function should also work with negative numbers and floats.

  Kata Link:
    https://www.codewars.com/kata/average-array

  Discuss Link:
    https://www.codewars.com/kata/average-array/discuss

  Solutions Link:
    https://www.codewars.com/kata/average-array/solutions
*/

// Long Solution
const avgArray = array => {
  const initialArray = Array.from({ length: array[0].length }, () => 0)
  const totalValues = array.reduce((result, array) => {
    array.forEach((value, index) => (result[index] += value))
    return result
  }, initialArray)

  const totalAverages = totalValues.map(value => value / array.length)
  return totalAverages
}

// Function Export
module.exports = avgArray
