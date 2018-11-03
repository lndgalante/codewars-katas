/*
  Title:
    Sort an array by value and index

  Description:
    Your task is to sort an array of integer numbers by the product of the value and the index of the positions.

    For sorting the index starts at 1, NOT at 0!
    The sorting has to be ascending.
    The array will never be null and will always contain numbers.

  Examples:
    Input: 23, 2, 3, 4, 5
    Product of value and index:
    23 => 23 * 1 = 23  -> Output-Pos 4
    2 =>  2 * 2 = 4   -> Output-Pos 1
    3 =>  3 * 3 = 9   -> Output-Pos 2
    4 =>  4 * 4 = 16  -> Output-Pos 3
    5 =>  5 * 5 = 25  -> Output-Pos 5

    Output: 2, 3, 4, 23, 5

  Kata Link:
    https://www.codewars.com/kata/sort-an-array-by-value-and-index

  Discuss Link:
    https://www.codewars.com/kata/sort-an-array-by-value-and-index/discuss

  Solutions Link:
    https://www.codewars.com/kata/sort-an-array-by-value-and-index/solutions
*/

// Long Solution
const sortByValueAndIndex = array =>
  array
    .map((value, index) => ({ value, index: index + 1 }))
    .sort((a, b) => a.value * a.index - b.value * b.index)
    .map(({ value }) => value)

// Function Export
module.exports = sortByValueAndIndex
