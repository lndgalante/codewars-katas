/*
  Title:
    Parse float

  Description:
    Write function parseFloat (for Javascript parseF) which takes a string and returns a number or Nothing (for Python None, for Javascript null) if conversion is not possible.

  Kata Link:
    https://www.codewars.com/kata/parse-float

  Discuss Link:
    https://www.codewars.com/kata/parse-float/discuss

  Solutions Link:
    https://www.codewars.com/kata/parse-float/solutions
*/

// Long Solution
const parseF = s => (Number.isNaN(parseFloat(s)) ? null : parseFloat(s))

// Function Export
module.exports = parseF
