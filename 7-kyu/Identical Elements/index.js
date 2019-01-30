/*
  Title:
    Identical Elements

  Description:
    Given two arrays of integers m and n, test if they contain at least one identical element. Return true if they do; false if not.
    Your code must handle any value within the range of a 32-bit integer, and must be capable of handling either array being empty (which is a false result, as there are no duplicated elements).

  Kata Link:
    https://www.codewars.com/kata/identical-elements

  Discuss Link:
    https://www.codewars.com/kata/identical-elements/discuss

  Solutions Link:
    https://www.codewars.com/kata/identical-elements/solutions
*/

// Long Solution
const duplicateElements = (m, n) => m.some(element => n.includes(element))

// Function Export
module.exports = duplicateElements
