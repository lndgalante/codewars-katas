/*
  Title:
    Heron's formula

  Description:
    Write function heron which calculates the area of a triangle with sides a, b, and c.

    Heron's formula: sqrt (s * (s - a) * (s - b) * (s - c)), where s = (a + b + c) / 2

  Kata Link:
    https://www.codewars.com/kata/herons-formula-1

  Discuss Link:
    https://www.codewars.com/kata/herons-formula-1/discuss

  Solutions Link:
    https://www.codewars.com/kata/herons-formula-1/solutions
*/

// Long Solution
/*
const heron = (a, b, c) => {
  const s = (a + b + c) / 2
  return Math.sqrt(s * (s - a) * (s - b) * (s - c))
}
*/

// Short Solution
const heron = (a, b, c, s = (a + b + c) / 2) => Math.sqrt(s * (s - a) * (s - b) * (s - c))

// Function Export
module.exports = heron
