/*
  Title:
    Change two-dimensional array

  Description:
    Function receive a two-dimensional array of random integers.
    On the main diagonal all the integers of this array with the sign (-) must be changed to 0, and the integers with a sign (+) must be changed to 1.

  Examples:
    Input array [ [ -1, 4, -5, -9, 3 ], [ 6, -4, -7, 4, -5 ], [ 3, 5, 0, -9, -1 ], [ 1, 5, -7, -8, -9 ], [ -3, 2, 1, -5, 6 ] ]
    Output array [ [ 0, 4, -5, -9, 3 ], [ 6, 0, -7, 4, -5 ], [ 3, 5, 1, -9, -1 ], [ 1, 5, -7, 0, -9 ], [ -3, 2, 1, -5, 1 ] ]

  Kata Link:
    https://www.codewars.com/kata/changing-letters

  Discuss Link:
    https://www.codewars.com/kata/changing-letters/discuss

  Solutions Link:
    https://www.codewars.com/kata/changing-letters/solutions
*/

// Long Solution
const matrix = array => {
  return array.map((row, rowIndex) =>
    row.map((integer, columnIndex) => {
      if (rowIndex === columnIndex) return integer >= 0 ? 1 : 0
      return integer
    })
  )
}

// Function Export
module.exports = matrix
