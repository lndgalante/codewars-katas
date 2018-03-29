/*
  Title:
    Arguments to Binary addition

  Description:
    Given an array add all the number elements and return the binary equivalent of that sum;
    to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.

    If your language can handle float binaries assume the array won't contain float or doubles.

  Examples:
    arr2bin([1,2]) == '11'
    arr2bin([1,2,'a']) == '11'
    arr2bin([]) == '0'

    NOTE:

  Notes:
    NaN is a number too in javascript for decimal, binary and n-ary base

  Kata Link:
    https://www.codewars.com/kata/arguments-to-binary-addition

  Discuss Link:
    https://www.codewars.com/kata/arguments-to-binary-addition/discuss

  Solutions Link:
    https://www.codewars.com/kata/arguments-to-binary-addition/solutions
*/

// Long Solution
const arr2bin = arr =>
  arr
    .reduce(
      (total, value) => (typeof value === 'number' ? total + value : total),
      0
    )
    .toString(2)

// Function Export
module.exports = arr2bin
