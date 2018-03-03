/*
  Title:
    noobCode 01: SUPERSIZE ME.... or rather, this integer!

  Description:
    Write a function that rearranges an integer into its largest possible value.


    If the argument passed through is single digit or is already the maximum possible integer, your function should simply return it.

  Examples:
    superSize(123456) //654321
    superSize(105) // 510
    superSize(12) // 21

  Kata Link:
    https://www.codewars.com/kata/noobcode-01-supersize-me-dot-dot-dot-or-rather-this-integer

  Discuss Link:
    https://www.codewars.com/kata/noobcode-01-supersize-me-dot-dot-dot-or-rather-this-integer/discuss

  Solutions Link:
    https://www.codewars.com/kata/noobcode-01-supersize-me-dot-dot-dot-or-rather-this-integer/solutions
*/

// Long Solution
/*
function superSize(num) {
  const result = String(num)
    .split('')
    .sort((a, b) => b - a)
    .join('')

  return Number(result)
}
*/

// Short Solution
const superSize = num =>
  Number(
    String(num)
      .split('')
      .sort((a, b) => b - a)
      .join('')
  )

// Function Export
module.exports = superSize
