/*
  Title:
    Get Nth Even Number

  Description:
    Return the Nth Even Number
    The input will not be 0.

  Examples:
    nthEven(1)
      //=> 0, the first even number is 0
    nthEven(3)
      //=> 4, the 3rd even number is 4 (0, 2, 4)
    nthEven(100)
      //=> 198
    nthEven(1298734)
      //=> 2597466

  Notes:
    Think Math

  Kata Link:
    https://www.codewars.com/kata/get-nth-even-number

  Discuss Link:
    https://www.codewars.com/kata/get-nth-even-number/discuss

  Solutions Link:
    https://www.codewars.com/kata/get-nth-even-number/solutions
*/

// Long Solution
// const nthEven = n => n * 2 - 2

// Short Solution
const nthEven = n => (n - 1) * 2

// Function Export
module.exports = nthEven
