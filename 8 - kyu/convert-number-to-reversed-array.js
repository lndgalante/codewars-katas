/* 
  Title:
    Convert number to reversed array of digits

  Description:
    Given a random number
    You have to return the digits of this number within an array in reverse order.

  Examples:
    348597 => [7, 9, 5, 8, 4, 3]
  
  Link:
    https://www.codewars.com/kata/convert-number-to-reversed-array-of-digits
*/

// Long Solution
// function digitize(n) {
//   return String(n)
//     .split('')
//     .reverse()
//     .map(char => Number(char))
// }

// Short Solution
const digitize = n =>
  String(n)
    .split('')
    .reverse()
    .map(char => Number(char))

// Test to pass
console.log(digitize(348597))
// => It should return [7, 9, 5, 8, 4, 3]
console.log(digitize(35231))
// => It should return [1, 3, 2, 5, 3]
