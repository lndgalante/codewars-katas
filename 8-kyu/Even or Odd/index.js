/* 
  Title:
    Even or Odd

  Description:
    Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

  Link:
    https://www.codewars.com/kata/even-or-odd
*/

// Long Solution
/* 
function even_or_odd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd'
} 
*/

// Short Solution
const even_or_odd = n => (n % 2 === 0 ? 'Even' : 'Odd')

// Function Export
module.exports = even_or_odd
