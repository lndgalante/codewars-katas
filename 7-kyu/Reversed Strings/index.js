/*
  Title:
    Reversed Strings

  Description:
    Complete the solution so that it reverses the string value passed into it.

  Examples:
    solution('world');
      // returns 'dlrow'

  Kata Link:
    https://www.codewars.com/kata/reversed-strings

  Discuss Link:
    https://www.codewars.com/kata/reversed-strings/discuss

  Solutions Link:
    https://www.codewars.com/kata/reversed-strings/solutions
*/

// Long Solution
/*
const solution = str =>
  str
    .split('')
    .reverse()
    .join('')
*/

// Short Solution
const solution = str => [...str].reverse().join('')

// Function Export
module.exports = solution
