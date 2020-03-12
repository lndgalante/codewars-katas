/* eslint no-unused-expressions: 0 */

/*
  Title:
    Not above the one!

  Description:
    Write an algorithm to remove all the numbers above 1 from the given array.
    Just in case we want to make any changes, create an array of the indexes of the removed numbers.

    Return a nested array or a tuple:
    - the first array being only the 1s and 0s
    - the second array being the indexes of the removed numbers

  Examples:
    [ 0, 1, 2, 1, 5, 6, 2, 1, 1, 0 ]
    [ 0, 1, 2, 1, 5, 6, 2, 1, 1, 0 ]

    should return
    [ [ 0, 1, 1, 1, 1, 0 ], [ 2, 4, 5, 6 ] ]
    ( [ 0, 1, 1, 1, 1, 0 ], [ 2, 4, 5, 6 ] )

  Kata Link:
    https://www.codewars.com/kata/not-above-the-one

  Discuss Link:
    https://www.codewars.com/kata/not-above-the-one/discuss

  Solutions Link:
    https://www.codewars.com/kata/not-above-the-one/solutions
*/

// Long Solution
const binaryCleaner = array => {
  const binariesNumbers = [0, 1]

  return array.reduce(
    (acc, number, index) => {
      const [binaries, removedIndexes] = acc
      binariesNumbers.includes(number) ? binaries.push(number) : removedIndexes.push(index)

      return [binaries, removedIndexes]
    },
    [[], []]
  )
}

// Function Export
module.exports = binaryCleaner
