/*
  Title:
    Geometry Basics: Circle Area in 2D

  Description:
    This series of katas will introduce you to basics of doing geometry with computers.

    Write the function circleArea/CircleArea which takes in a Circle object and calculates the area of that circle.
    The Circle class can be seen below:

    // Represents a Circle where center is a Point and radius is a Number
    class Circle {
      constructor(center, radius) {
        this.center = center;
        this.radius = radius;
      }
    }
    And the Point class can be seen below:

    // Represents a Point where x and y are Numbers
    class Point {
      constructor (x,y) {
        this.x = x;
        this.y = y;
      }
    }
    Tests round answers to 6 decimal places.

  Kata Link:
    https://www.codewars.com/kata/geometry-basics-circle-area-in-2d

  Discuss Link:
    https://www.codewars.com/kata/geometry-basics-circle-area-in-2d/discuss

  Solutions Link:
    https://www.codewars.com/kata/geometry-basics-circle-area-in-2d/solutions
*/

// Long Solution
const circleArea = ({ radius }) => Number((Math.PI * radius ** 2).toFixed(6))

// Function Export
module.exports = circleArea
