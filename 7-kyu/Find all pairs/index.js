/*
  Title:
    Find all pairs

  Description:
    You are given array of integers, your task will be to count all pairs in that array and return their count.

  Examples:
    [1, 2, 5, 6, 5, 2]  -->  2...because there are 2 pairs: 2 and 5
    [1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4...because there are 4 pairs: 2, 20, 6 and 2 (again)

  Notes:
    - Array can be empty or contain only one value; in this case return 0
    - If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
    - Random tests: maximum array length is 1000, range of values in array is between 0 and 1000

  Kata Link:
    https://www.codewars.com/kata/5c55ad8c9d76d41a62b4ede3

  Discuss Link:
    https://www.codewars.com/kata/5c55ad8c9d76d41a62b4ede3/discuss

  Solutions Link:
    https://www.codewars.com/kata/5c55ad8c9d76d41a62b4ede3/solutions
*/

// Long Solution
const duplicates = (array) => {
  const repetitions = array.reduce((acc, number) => ({ ...acc, [number]: (acc[number] || 0) + 1 }), {})

  return Object.entries(repetitions).reduce((total, [, repetitions]) => total + Math.floor(repetitions / 2), 0)
}

// Function Export
module.exports = duplicates
