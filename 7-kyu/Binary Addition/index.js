/* 
  Title:
    Binary Addition

  Description:
    Implement a function that adds two numbers together and returns their sum in binary.
    The conversion can be done before, or after the addition.

    The binary number returned should be a string.

  Link:
    https://www.codewars.com/kata/binary-addition
*/

// Long Solution
const addBinary = (a, b) => (a + b).toString(2)

// Function Export
module.exports = addBinary
