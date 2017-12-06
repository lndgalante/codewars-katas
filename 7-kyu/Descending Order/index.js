/* 
  Title:
    Descending Order

  Description:
    Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order.
    Essentially, rearrange the digits to create the highest possible number.

  Examples:
    Input: 21445 Output: 54421

    Input: 145263 Output: 654321

    Input: 1254859723 Output: 9875543221

  Link:
    https://www.codewars.com/kata/descending-order
*/

// Long Solution
// function descendingOrder(n) {
//   return String(n)
//     .split('')
//     .sort((a, b) => a < b)
//     .join('')
// }

// Short Solution
const descendingOrder = n =>
  Number(
    String(n)
      .split('')
      .sort((a, b) => a < b)
      .join('')
  )

// Function Export
module.exports = descendingOrder
