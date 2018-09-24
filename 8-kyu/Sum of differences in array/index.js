/*
  Title:
    Sum of differences in array

  Description:
    Your task is to sum the differences between consecutive pairs in the array in descending order.

  Examples:
    For example: sumOfDifferences([1, 2, 10] Returns 9

    Descending order: [10, 2, 1]

    Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

  Notes:
      If the array is empty or the array has only one element the result should be 0.

  Kata Link:
    https://www.codewars.com/kata/{kata-name}

  Discuss Link:
    https://www.codewars.com/kata/{kata-name}/discuss

  Solutions Link:
    https://www.codewars.com/kata/{kata-name}/solutions
*/

// Long Solution
/*
const sumOfDifferences = arr =>
  [...arr]
    .sort((a, b) => b - a)
    .reduce(
      (total, number, index, array) =>
        index + 1 < array.length ? total + number - array[index + 1] : total,
      0
    )
*/

// Short Solution
const sumOfDifferences = arr =>
  arr.length <= 1 ? 0 : Math.max(...arr) - Math.min(...arr)

// Function Export
module.exports = sumOfDifferences
