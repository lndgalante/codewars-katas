/*
  Title:
    Ones and Zeros

  Description:
    Given an array of one's and zero's convert the equivalent binary value to an integer.

    Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1

  Examples:
    Testing: [0, 0, 0, 1] ==> 1
    Testing: [0, 0, 1, 0] ==> 2
    Testing: [0, 1, 0, 1] ==> 5
    Testing: [1, 0, 0, 1] ==> 9
    Testing: [0, 0, 1, 0] ==> 2
    Testing: [0, 1, 1, 0] ==> 6
    Testing: [1, 1, 1, 1] ==> 15
    Testing: [1, 0, 1, 1] ==> 11

  Kata Link:
    https://www.codewars.com/kata/ones-and-zeros

  Discuss Link:
    https://www.codewars.com/kata/ones-and-zeros/discuss

  Solutions Link:
    https://www.codewars.com/kata/ones-and-zeros/solutions
*/

// Long Solution
/*
function binaryArrayToNumber(arr) {
  const binary = arr.join('')
  return parseInt(binary, 2)
}
*/

// Short Solution
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2)

// Function Export
module.exports = binaryArrayToNumber
