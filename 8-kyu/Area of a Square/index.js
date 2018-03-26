/*
  Title:
    Area of a Square

  Description:
    Write the function squareArea(A) (square_area($A) in PHP) that finds the area of the red square when you have the length of the circular arc A.

    Use π = Math.PI (M_PI in PHP)
    Round to two decimals.

  Kata Link:
    https://www.codewars.com/kata/area-of-a-square

  Discuss Link:
    https://www.codewars.com/kata/area-of-a-square/discuss

  Solutions Link:
    https://www.codewars.com/kata/area-of-a-square/solutions
*/

// Long Solution
const squareArea = A => Number(Math.pow(2 * A / 3.1416, 2).toFixed(2))

// Function Export
module.exports = squareArea
