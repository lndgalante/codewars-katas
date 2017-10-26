/* 
  Title:
    Bit Counting

  Description:
    Write a function that takes an (unsigned) integer as input, and returns the number of bits that are equal to one in the binary representation of that number.

  Examples:
    The binary representation of 1234 is 10011010010, so the function should return 5 in this case

  Link:
    https://www.codewars.com/kata/bit-counting
*/

// Long Solution
// function countBits(n) {
//   return n
//     .toString(2)
//     .split('')
//     .reduce((a, b) => (b === '1' ? ++a : a), 0)
// }

// Short Solution
const countBits = n =>
  n
    .toString(2)
    .split('')
    .reduce((a, b) => (b === '1' ? ++a : a), 0)

// Test to pass
console.log(countBits(0))
// => It should return 0
console.log(countBits(4))
// => It should return 1
console.log(countBits(7))
// => It should return 3
console.log(countBits(9))
// => It should return 2
console.log(countBits(10))
// => It should return 2
