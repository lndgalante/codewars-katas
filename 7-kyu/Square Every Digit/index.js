/*
  Title:
    Square Every Digit

  Description:
    Welcome. In this kata, you are asked to square every digit of a number.

  Examples:
    For example, if we run 9119 through the function, 811181 will come out.

  Notes:
    The function accepts an integer and returns an integer

  Kata Link:
    https://www.codewars.com/kata/square-every-digit

  Discuss Link:
    https://www.codewars.com/kata/square-every-digit/discuss

  Solutions Link:
    https://www.codewars.com/kata/square-every-digit/solutions
*/

// Long Solution
/*
function squareDigits(num) {
  const result = String(num)
    .split('')
    .map(digit => Math.pow(digit, 2))
    .join('')

  return Number(result)
}
*/

// Short Solution
const squareDigits = num =>
  Number(
    String(num)
      .split('')
      .map(digit => digit ** 2)
      .join('')
  )

// Function Export
module.exports = squareDigits
