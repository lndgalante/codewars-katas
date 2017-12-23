/*
  Title:
    Sum without highest and lowest number

  Description:
    Sum all the numbers of the array except the highest
    and the lowest element (the value, not the index!).
    (The highest/lowest element is respectively only one element at each edge,
    even if there are more than one with the same value!)

  Examples:
    { 6, 2, 1, 8, 10 } => 16
    { 1, 1, 11, 2, 3 } => 6


  Notes:
    If array is empty, null or None, or if only 1 Element exists, return 0.
    In C++ instead null an empty vector is used. In C there is no null. ;-)
    There's no null in Haskell, therefore Maybe [Int] is used. Nothing represents null.

  Kata Link:
    https://www.codewars.com/kata/sum-without-highest-and-lowest-number

  Discuss Link:
    https://www.codewars.com/kata/sum-without-highest-and-lowest-number/discuss

  Solutions Link:
    https://www.codewars.com/kata/sum-without-highest-and-lowest-number/solutions
*/

// Long Solution
function sumArray(array) {
  if (!Array.isArray(array)) return 0

  return array
    .sort((a, b) => a - b)
    .slice(1, array.length - 1)
    .reduce((a, b) => a + b, 0)
}

// Function Export
module.exports = sumArray
