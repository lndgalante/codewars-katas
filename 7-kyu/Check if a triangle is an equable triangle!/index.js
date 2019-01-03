/*
  Title:
    Check if a triangle is an equable triangle!

  Description:
    A triangle is called an equable triangle if its area equals its perimeter.
    Return true, if it is an equable triangle, else return false.
    You will be provided with the length of sides of the triangle. Happy Coding!

  Kata Link:
    https://www.codewars.com/kata/check-if-a-triangle-is-an-equable-triangle

  Discuss Link:
    https://www.codewars.com/kata/check-if-a-triangle-is-an-equable-triangle/discuss

  Solutions Link:
    https://www.codewars.com/kata/check-if-a-triangle-is-an-equable-triangle/solutions
*/

// Long Solution
/*
 const equableTriangle = (a, b, c) => {
  const p = (a + b + c) / 2
  const area = Math.sqrt(p * (p - a) * (p - b) * (p - c))

  return p * 2 === area
}
*/

// Short Solution
const equableTriangle = (a, b, c) => a + b + c === Math.sqrt((a + b + c) * (b + c - a) * (a + c - b) * (a + b - c)) / 4

// Function Export
module.exports = equableTriangle
