/*
  Title:
    Geometry Basics: Distance between points in 2D

  Description:
    This series of katas will introduce you to basics of doing geometry with computers.

    Point objects have x and y attributes (X and Y in C#) attributes.

    Write a function calculating distance between Point a and Point b.

    Tests round answers to 6 decimal places.

  Kata Link:
    https://www.codewars.com/kata/geometry-basics-distance-between-points-in-2d

  Discuss Link:
    https://www.codewars.com/kata/geometry-basics-distance-between-points-in-2d/discuss

  Solutions Link:
    https://www.codewars.com/kata/geometry-basics-distance-between-points-in-2d/solutions
*/

// Long Solution
/*
const distanceBetweenPoints = ({ x: x1, y: y1 }, { x: x2, y: y2 }) =>
  Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
*/

// Short Solution
const distanceBetweenPoints = ({ x: x1, y: y1 }, { x: x2, y: y2 }) =>
  Math.hypot(x1 - x2, y1 - y2)

// Function Export
module.exports = distanceBetweenPoints
