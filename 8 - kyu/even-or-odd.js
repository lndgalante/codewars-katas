/* 
  Title:
    Even or Odd

  Description:
    Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

  Examples:

  Notes:
  
  Link:
*/

// Long Solution
function even_or_odd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd'
}

// Short Solution
const even_or_odd = n => (n % 2 === 0 ? 'Even' : 'Odd')

// Test to pass
console.log(even_or_odd(2))
// => It should return "Even"
console.log(even_or_odd(0))
// => It should return "Even"
console.log(even_or_odd(7))
// => It should return "Odd"
console.log(even_or_odd(1))
// => It should return "Odd"
