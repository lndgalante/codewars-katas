/*
  Title:
    Sum of Cubes

  Description:
    Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.
    Assume that the input n will always be a positive integer.

  Examples:
    sumCubes(2) // 9
    // sum of the cubes of 1 and 2 is 1 + 8

  Kata Link:
    https://www.codewars.com/kata/59a8570b570190d313000037

  Discuss Link:
    https://www.codewars.com/kata/59a8570b570190d313000037/discuss

  Solutions Link:
    https://www.codewars.com/kata/59a8570b570190d313000037/solutions
*/

// Long Solution
/*
const sumCubes = (n) => {
  return Array.from({ length: n }, (_, index) => index + 1).reduce((total, number) => total + number ** 3, 0)
}
*/

// Short Solution
const sumCubes = (n) => ((n * (n + 1)) / 2) ** 2

// Function Export
module.exports = sumCubes
