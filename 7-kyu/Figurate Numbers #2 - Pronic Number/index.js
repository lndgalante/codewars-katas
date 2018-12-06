/*
  Title:
    Figurate Numbers #2 - Pronic Number

  Description:
    #Task:
      You have to create a function isPronic to check whether the argument passed is a Pronic Number and return true if it is & false otherwise.

    #Description:
      Pronic Number -A pronic number, oblong number, rectangular number or heteromecic number,
      is a number which is the product of two consecutive integers, that is, n(n + 1).
      The first few Pronic Numbers are - 0, 2, 6, 12, 20, 30, 42...

  Examples:
      0 = 0 × 1   // ∴  0 is a Pronic Number
      2 = 1 × 2   // ∴  2 is a Pronic Number
      6 = 2 × 3   // ∴  6 is a Pronic Number
    12 = 3 × 4   // ∴ 12 is a Pronic Number
    20 = 4 × 5   // ∴ 20 is a Pronic Number
    30 = 5 × 6   // ∴ 30 is a Pronic Number
    42 = 6 × 7   // ∴ 42 is a Pronic Number

  Kata Link:
    https://www.codewars.com/kata/figurate-numbers-number-2-pronic-number

  Discuss Link:
    https://www.codewars.com/kata/figurate-numbers-number-2-pronic-number/discuss

  Solutions Link:
    https://www.codewars.com/kata/figurate-numbers-number-2-pronic-number/solutions
*/

// Long Solution
/*
const isPronic = n => {
  for (let i = 0; i <= n; i++) {
    if (n === i * (i + 1)) return true
  }

  return false
}
*/

// Short Solution
const isPronic = n => Math.sqrt(4 * n + 1) % 1 === 0

// Function Export
module.exports = isPronic
