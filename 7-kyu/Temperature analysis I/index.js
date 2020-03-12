/*
  Title:
    Temperature analysis I

  Description:
    You were given a string of integer temperature values.
    Create a function lowest_temp(t) and return the lowest value or None/null/Nothing if the string is empty.

  Kata Link:
    https://www.codewars.com/kata/temperature-analysis-i

  Discuss Link:
    https://www.codewars.com/kata/temperature-analysis-i/discuss

  Solutions Link:
    https://www.codewars.com/kata/temperature-analysis-i/solutions
*/

// Long Solution
/*
 const lowestTemp = t => (t.length ? Math.min(...t.split(' ').map(Number)) : null)
*/

// Short Solution
const lowestTemporary = t => Math.min(...t.split(' ').map(Number)) || null

// Function Export
module.exports = lowestTemporary
