/*
  Title:
    Find Nearest square number

  Description:
    Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

  Kata Link:
    https://www.codewars.com/kata/find-nearest-square-number

  Discuss Link:
    https://www.codewars.com/kata/find-nearest-square-number/discuss

  Solutions Link:
    https://www.codewars.com/kata/find-nearest-square-number/solutions
*/

// Long Solution
const nearestSq = n => Math.round(Math.sqrt(n)) ** 2

// Function Export
module.exports = nearestSq
