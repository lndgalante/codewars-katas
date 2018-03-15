/*
  Title:
    Multiple of index

  Description:
    Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

  Examples:
    [22, -6, 32, 82, 9, 25]
      =>  [-6, 32, 25]

    [68, -1, 1, -7, 10, 10]
      => [-1, 10]

    [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68]
      => [-85, 72, 0, 68]

  Kata Link:
    https://www.codewars.com/kata/multiple-of-index

  Discuss Link:
    https://www.codewars.com/kata/multiple-of-index/discuss

  Solutions Link:
    https://www.codewars.com/kata/multiple-of-index/solutions
*/

// Long Solution
const multipleOfIndex = array =>
  array.filter((value, index) => value % index === 0)

// Function Export
module.exports = multipleOfIndex
