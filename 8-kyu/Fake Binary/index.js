/*
  Title:

  Description:
    Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'.
    Return the resulting string.

  Kata Link:
    https://www.codewars.com/kata/fake-binary

  Discuss Link:
    https://www.codewars.com/kata/fake-binary/discuss

  Solutions Link:
    https://www.codewars.com/kata/fake-binary/solutions
*/

// Long Solution
/*
const fakeBin = x =>
  x
    .split('')
    .map(num => (Number(num) >= 5 ? 1 : 0))
    .join('')
*/

// Short Solution
const fakeBin = x => x.replace(/\d/g, d => (d >= 5 ? 1 : 0))

// Function Export
module.exports = fakeBin
