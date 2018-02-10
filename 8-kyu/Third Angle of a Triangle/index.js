/*
  Title:
    Third Angle of a Triangle

  Description:
    You are given two angles (in degrees) of a triangle.
    Write a function to return the 3rd.

  Notes:
    Only positive integers will be tested.

  Kata Link:
    https://www.codewars.com/kata/third-angle-of-a-triangle

  Discuss Link:
    https://www.codewars.com/kata/third-angle-of-a-triangle/discuss

  Solutions Link:
    https://www.codewars.com/kata/third-angle-of-a-triangle/solutions
*/

// Short Solution
const otherAngle = (a, b) => 180 - (a + b)

// Function Export
module.exports = otherAngle
