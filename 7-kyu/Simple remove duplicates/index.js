/*
  Title:
    Simple remove duplicates

  Description:
    In this Kata, you will remove the left-most duplicates from a array/list of integers and return the result.

  Examples:
    -- Remove the 3's at indices 0 and 3
    -- followed by removing a 4 at index 1
    solve [3, 4, 4, 3, 6, 3] -- => [4, 6, 3]

  Kata Link:
    https://www.codewars.com/kata/simple-remove-duplicates

  Discuss Link:
    https://www.codewars.com/kata/simple-remove-duplicates/discuss

  Solutions Link:
    https://www.codewars.com/kata/simple-remove-duplicates/solutions
*/

// Long Solution
/*
const solve = arr =>
  arr.reduce((accumulator, int, index, array) => {
    if (!array.includes(int, index + 1)) return [...accumulator, int]
    return accumulator
  }, [])
*/

// Short Solution
const solve = arr => [...new Set([...arr].reverse())].reverse()

// Function Export
module.exports = solve
