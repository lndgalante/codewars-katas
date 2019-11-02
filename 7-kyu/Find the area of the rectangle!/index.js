/*
  Title:
    Find the area of the rectangle!

  Description:
    Find the area of a rectangle when provided with one diagonal and one side of the rectangle.
    If the input diagonal is less than or equal to the length of the side, return "Not a rectangle".
    If the resultant area has decimals round it to two places.

  Kata Link:
    https://www.codewars.com/kata/find-the-area-of-the-rectangle

  Discuss Link:
    https://www.codewars.com/kata/find-the-area-of-the-rectangle/discuss

  Solutions Link:
    https://www.codewars.com/kata/find-the-area-of-the-rectangle/solutions
*/

// Long Solution
const area = (d, l) => (d <= l ? 'Not a rectangle' : Math.round(l * Math.sqrt(d ** 2 - l ** 2) * 100) / 100)

// Function Export
module.exports = area
