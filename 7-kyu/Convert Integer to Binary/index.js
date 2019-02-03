/*
  Title:
    Convert Integer to Binary

  Description:
    Convert integers to binary as simple as that. You would be given an integer as a argument and you have to return its binary form.
    To get an idea about how to convert a decimal number into a binary number, visit here.

  Examples:
    toBinary(3)=="11"
    toBinary(-3)=="11111111111111111111111111111101"

  Notes:
    - Negative numbers should be handled as two's complement; assume all numbers are integers stored using 4 bytes (or 32 bits) in any language.
    - Your output should ignore leading 0s.

  Kata Link:
    https://www.codewars.com/kata/convert-integer-to-binary

  Discuss Link:
    https://www.codewars.com/kata/convert-integer-to-binary/discuss

  Solutions Link:
    https://www.codewars.com/kata/convert-integer-to-binary/solutions
*/

// Long Solution
/*
const toBinary = n => (n > 0 ? n.toString(2) : (n >>> 0).toString(2))
*/

// Short Solution
const toBinary = n => (n >>> 0).toString(2)

// Function Export
module.exports = toBinary
