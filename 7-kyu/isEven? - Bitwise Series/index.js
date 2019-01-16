/*
  Title:
    isEven? - Bitwise Series

  Description:
    Is the number even?

    If the numbers is even return true. If it's odd, return false.

    Oh yeah... the following symbols/commands have been disabled!
     use of %
     use of .even? in Ruby
     use of mod in Python

  Kata Link:
    https://www.codewars.com/kata/iseven-bitwise-series

  Discuss Link:
    https://www.codewars.com/kata/iseven-bitwise-series/discuss

  Solutions Link:
    https://www.codewars.com/kata/iseven-bitwise-series/solutions
*/

// Long Solution
const isEven = n => Number.isInteger(n / 2)

// Alternative Solution
/*
const isEven = n => (n & 1) === 0
*/

// Function Export
module.exports = isEven
