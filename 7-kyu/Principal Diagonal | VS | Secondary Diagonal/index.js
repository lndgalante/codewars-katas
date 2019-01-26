/*
  Title:
    Principal Diagonal | VS | Secondary Diagonal

  Description:
    Principal Diagonal -- The principal diagonal in a matrix identifies those elements of the matrix running from North-West to South-East.
    Secondary Diagonal -- the secondary diagonal of amatrix identifies those elements of the matrix running from North-East to South-West.

    Your task is to find which diagonal is "larger": which diagonal has a bigger sum of their elements.
    - If the principal diagonal is larger, return "Principal Diagonal win!"
    - If the secondary diagonal is larger, return "Secondary Diagonal win!"
    - If they are equal, return "Draw!"

  Examples:
    matrix:             [1, 2, 3]
                        [4, 5, 6]
                        [7, 8, 9]

    principal diagonal: [1, 5, 9]
    secondary diagonal: [3, 5, 7]

  Notes:
    You will always receive matrices of the same dimension.

  Kata Link:
    https://www.codewars.com/kata/principal-diagonal-vs-secondary-diagonal

  Discuss Link:
    https://www.codewars.com/kata/principal-diagonal-vs-secondary-diagonal/discuss

  Solutions Link:
    https://www.codewars.com/kata/principal-diagonal-vs-secondary-diagonal/solutions
*/

// Long Solution
/*
const diagonal = matrix => {
  const principalDiagonal = matrix.map((row, index) => row[index])
  const secondaryDiagonal = matrix.map((row, index) => row[row.length - (index + 1)])

  const principalDiagonalTotal = principalDiagonal.reduce((total, num) => total + num, 0)
  const secondaryDiagonalTotal = secondaryDiagonal.reduce((total, num) => total + num, 0)

  if (principalDiagonalTotal > secondaryDiagonalTotal) return 'Principal Diagonal win!'
  if (secondaryDiagonalTotal > principalDiagonalTotal) return 'Secondary Diagonal win!'

  return 'Draw!'
}
*/

// Short Solution
const diagonal = matrix =>
  ['Secondary Diagonal win!', 'Draw!', 'Principal Diagonal win!'][
    1 + Math.sign(matrix.reduce((total, row, index) => total + row[index] - row[row.length - index - 1], 0))
  ]

// Function Export
module.exports = diagonal
