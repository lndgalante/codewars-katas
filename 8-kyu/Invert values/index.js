/*
  Title:
    Invert values

  Description:
    Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

  Examples:
    invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
    invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
    invert([]) == []

  Notes:
    You can assume that all values are integers.

  Kata Link:
    https://www.codewars.com/kata/invert-values

  Discuss Link:
    https://www.codewars.com/kata/invert-values/discuss

  Solutions Link:
    https://www.codewars.com/kata/invert-values/solutions
*/

// Short Solution
const invert = array => array.map(num => (num ? -num : num))

// Function Export
module.exports = invert
