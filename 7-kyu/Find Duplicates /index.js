/*
  Title:
    Find Duplicates

  Description:
    Given an array, find the duplicates in that array, and return a new array of those duplicates.
    The elements of the returned array should appear in the order when they first appeared as duplicates.

  Examples:
    [1, 2, 4, 4, 3, 3, 1, 5, 3, '5']  ==>  [4, 3, 1]
    [0, 1, 2, 3, 4, 5]                ==>  []

  Notes:
    Numbers and their corresponding string representations should not be treated as duplicates (i.e., '1' !== 1).

  Kata Link:
    https://www.codewars.com/kata/find-duplicates

  Discuss Link:
    https://www.codewars.com/kata/find-duplicates/discuss

  Solutions Link:
    https://www.codewars.com/kata/find-duplicates/solutions
*/

// Long Solution
const duplicates = arr => [...new Set(arr.filter(number => arr.indexOf(number) !== arr.lastIndexOf(number)))]

// Function Export
module.exports = duplicates
