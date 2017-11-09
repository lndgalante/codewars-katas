/* 
  Title:
    Square Every Digit

  Description:
    Welcome. In this kata, you are asked to square every digit of a number.

  Examples:
    For example, if we run 9119 through the function, 811181 will come out.

  Notes:
    The function accepts an integer and returns an integer
  
  Link:
    https://www.codewars.com/kata/square-every-digit/
*/

// Long Solution
// function squareDigits(num) {
//   const result = String(num)
//     .split('')
//     .map(digit => Math.pow(digit, 2))
//     .join('')
//   return Number(result)
// }

// Short Solution
const squareDigits = num =>
  Number(
    String(num)
      .split('')
      .map(digit => digit ** 2)
      .join('')
  )

// Test to pass
console.log(squareDigits(9119))
// => It should return 811181
