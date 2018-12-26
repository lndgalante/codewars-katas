/*
  Title:
    Array comparator

  Description:
    You have two arrays in this kata, every array contain only unique elements.
    Your task is to calcualate number of elements in first array which also are in second array.

  Kata Link:
    https://www.codewars.com/kata/array-comparator

  Discuss Link:
    https://www.codewars.com/kata/array-comparator/discuss

  Solutions Link:
    https://www.codewars.com/kata/array-comparator/solutions
*/

// Long Solution
const matchArrays = (v, r) => v.reduce((total, language) => (r.includes(language) ? total + 1 : total), 0)

// Function Export
module.exports = matchArrays
