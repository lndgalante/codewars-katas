/*
  Title:
    Even or Odd

  Description:
    Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

  Kata Link:
    https://www.codewars.com/kata/even-or-odd

  Discuss Link:
    https://www.codewars.com/kata/even-or-odd/discuss

  Solutions Link:
    https://www.codewars.com/kata/even-or-odd/solutions
*/

// Long Solution
/*
function even_or_odd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd'
}
*/

// Short Solution
const evenOrOdd = n => (n % 2 === 0 ? 'Even' : 'Odd')

// Function Export
module.exports = evenOrOdd
