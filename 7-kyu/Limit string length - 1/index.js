/*
  Title:
    Limit string length - 1

  Description:
    Complete the solution, so that it returns the truncated version of the string followed by '...'.

  Examples:
    solution('Testing String',3) // should return 'Tes...'
    solution('Testing String',8) // should return 'Testing ...'
    solution('Test',8) // should return 'Test'

  Kata Link:
    https://www.codewars.com/kata/limit-string-length-1

  Discuss Link:
    https://www.codewars.com/kata/limit-string-length-1/discuss

  Solutions Link:
    https://www.codewars.com/kata/limit-string-length-1/solutions
*/

// Long Solution
const solution = (string, limit) =>
  limit >= string.length ? string : `${string.substr(0, limit)}...`

// Function Export
module.exports = solution
