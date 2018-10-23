/*
  Title:
    Number Pairs

  Description:
    In this Kata the aim is to compare each pair of integers from 2 arrays,
    and return a new array of large numbers.

  Examples:
    let arr1 = [13, 64, 15, 17, 88];
    let arr2 = [23, 14, 53, 17, 80];
    getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]

  Kata Link:
    https://www.codewars.com/kata/number-pairs

  Discuss Link:
    https://www.codewars.com/kata/number-pairs/discuss

  Solutions Link:
    https://www.codewars.com/kata/number-pairs/solutions
*/

// Long Solution
/*
const getLargerNumbers = (a, b) =>
  a.map((valueA, index) => {
    const valueB = b[index]
    return valueA > valueB ? valueA : valueB
  })
*/

// Short Solution
const getLargerNumbers = (a, b) =>
  a.map((valueA, index) => Math.max(valueA, b[index]))

// Function Export
module.exports = getLargerNumbers
