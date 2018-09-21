/*
  Title:
    [Geometry A-2]: Length of a vector

  Description:
    For a given 2D vector described by cartesian coordinates of its initial point and terminal point in the following format:

    [[x1, y1], [x2, y2]]

    Your function must return this vector's length represented as a floating point number.

    Error must be within 1e-7.

    Coordinates can be integers or floating point numbers.

  Kata Link:
    https://www.codewars.com/kata/geometry-a-2-length-of-a-vector

  Discuss Link:
    https://www.codewars.com/kata/geometry-a-2-length-of-a-vector/discuss

  Solutions Link:
    https://www.codewars.com/kata/geometry-a-2-length-of-a-vector/solutions
*/

// Long Solution
const vectorLength = ([
  [initialPointX, initialPointY],
  [terminalPointX, terminalPointY],
]) =>
  Math.sqrt(
    (terminalPointX - initialPointX) ** 2 +
      (terminalPointY - initialPointY) ** 2
  )

// Function Export
module.exports = vectorLength
