/*
  Title:
    Round to the next multiple of 5

  Description:
    Given an integer as input, can you round it to the next (meaning, "higher") 5?

  Examples:
    input:      output:
    0      ->   0
    2      ->   5
    3      ->   5
    12     ->   15
    21     ->   25
    30     ->   30
    -2     ->   0
    -5     ->   -5

  Notes:
    - Input may be any positive or negative integer (including 0).
    - You can assume that all inputs are valid integers.

  Kata Link:
    https://www.codewars.com/kata/round-to-the-next-multiple-of-5

  Discuss Link:
    https://www.codewars.com/kata/round-to-the-next-multiple-of-5/discuss

  Solutions Link:
    https://www.codewars.com/kata/round-to-the-next-multiple-of-5/solutions
*/

// Long Solution
/*
const roundToNext5 = n => {
  for (let i = n; i <= Math.abs(n * 5); i++) {
    if (i % 5 === 0) return i
  }
}
*/

// Short Solution
const roundToNext5 = n => Math.ceil(n / 5) * 5

// Function Export
module.exports = roundToNext5
