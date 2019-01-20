/*
  Title:
    Rearange Number to Get its Maximum

  Description:
    Create function that takes one positive three digit integer and rearranges its digits to get maximum possible number.
    Assume that argument is integer. Return null (nil for ruby) if argument is not valid.

  Examples:
    maxRedigit(123); // returns 321

  Kata Link:
    https://www.codewars.com/kata/rearange-number-to-get-its-maximum

  Discuss Link:
    https://www.codewars.com/kata/rearange-number-to-get-its-maximum/discuss

  Solutions Link:
    https://www.codewars.com/kata/rearange-number-to-get-its-maximum/solutions
*/

// Long Solution
const maxRedigit = num => {
  if (num < 1 || String(num).length !== 3) return null
  return Number([...String(num)].sort((a, b) => Number(b) - Number(a)).join(''))
}

// Function Export
module.exports = maxRedigit
