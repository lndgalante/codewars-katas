/*
  Title:
    easy logs

  Description:
    Add two logs with base X, with the value of A and B. Example log A + log B where the base is X.

  Kata Link:
    https://www.codewars.com/kata/easy-logs

  Discuss Link:
    https://www.codewars.com/kata/easy-logs/discuss

  Solutions Link:
    https://www.codewars.com/kata/easy-logs/solutions
*/

// Long Solution
/*
const logs = (x, a, b) => (Math.log(a) + Math.log(b)) / Math.log(x)
*/

// Short Solution
const logs = (x, a, b) => Math.log(a * b) / Math.log(x)

// Function Export
module.exports = logs
