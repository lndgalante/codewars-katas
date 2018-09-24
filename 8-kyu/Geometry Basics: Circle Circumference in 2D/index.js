/*
  Title:
    Geometry Basics: Circle Circumference in 2D

  Description:
    This series of katas will introduce you to basics of doing geometry with computers.

    Point objects have x, y attributes. Circle objects have center which is a Point, and radius, which is a number.

    Write a function calculating circumference of a Circle.

    Tests round answers to 6 decimal places.

  Kata Link:
    https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d

  Discuss Link:
    https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/discuss

  Solutions Link:
    https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/solutions
*/

// Long Solution
const circleCircumference = ({ radius }) => 2 * Math.PI * radius

// Function Export
module.exports = circleCircumference
