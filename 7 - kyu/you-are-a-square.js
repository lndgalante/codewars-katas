/* 
  Title:
    You're a square!

  Description:
    A square of squares

    You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

    However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

    Task

    Given an integral number, determine if it's a square number:

    In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
    The tests will always use some integral number, so don't worry about that in dynamic typed languages.

  Examples:
    isSquare(-1) // => false
    isSquare( 3) // => false
    isSquare( 4) // => true
    isSquare(25) // => true
    isSquare(26) // => false

  Notes:
  
  Link:
    https://www.codewars.com/kata/youre-a-square
*/

// Long Solution
function isSquare(n) {
  return Number.isInteger(Math.sqrt(n))
}

// Short Solution
const isSquare = n => Number.isInteger(Math.sqrt(n))

console.log(isSquare(-1))
// => It should return false
console.log(isSquare(3))
// => It should return false
console.log(isSquare(4))
// => It should return true
console.log(isSquare(25))
// => It should return true
console.log(isSquare(26))
// => It should return false
