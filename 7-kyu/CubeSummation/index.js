/*
  Title:
    CubeSummation

  Description:
    Write a function cubeSum(n, m) that will calculate a sum of cubes of numbers in a given range, starting from the smaller (but not including it) to the larger (including). The first argument is not necessarily the larger number.
    If both numbers are the same, then the range is empty and the result should be 0.

  Examples:
    cubeSum(2,3); // => 3^3 = 27
    cubeSum(3,2); // => 3^3 = 27
    cubeSum(0,4); // => 1^3+2^3+3^3+4^3 = 100
    cubeSum(17, 14); // => 15^3+16^3+17^3 = 12384
    cubeSum(9, 9); // => 0

  Kata Link:
    https://www.codewars.com/kata/cubesummation

  Discuss Link:
    https://www.codewars.com/kata/cubesummation/discuss

  Solutions Link:
    https://www.codewars.com/kata/cubesummation/solutions
*/

// Long Solution
/*
const cubeSum = (n, m) =>
  Array.from({ length: Math.max(n, m) - Math.min(n, m) }, (_, index) => {
    const minimum = Math.min(n, m)
    return index === 0 ? minimum + 1 : index + 1 + minimum
  }).reduce((total, number) => total + number ** 3, 0)
*/

// Short Solution
const cubeSum = (n, m) => Math.abs(n * n * (n + 1) * (n + 1) - m * m * (m + 1) * (m + 1)) / 4

// Function Export
module.exports = cubeSum
