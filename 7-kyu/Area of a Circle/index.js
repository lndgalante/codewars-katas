/*
  Title:
    Area of a Circle

  Description:
    Complete the function circleArea so that it will return the area of a circle with the given radius.
    Round the returned number to two decimal places (except for Haskell).
    If the radius is not positive or not a number, return false.

  Examples:
    circleArea(-1485.86);    //returns false
    circleArea(0);           //returns false
    circleArea(43.2673);     //returns 5881.25
    circleArea(68);          //returns 14526.72
    circleArea("number");    //returns false

  Kata Link:
    https://www.codewars.com/kata/area-of-a-circle

  Discuss Link:
    https://www.codewars.com/kata/area-of-a-circle/discuss

  Solutions Link:
    https://www.codewars.com/kata/area-of-a-circle/solutions
*/

// Long Solution
const circleArea = radius =>
  radius <= 0 || typeof radius !== 'number'
    ? false
    : Number((Math.PI * Math.pow(radius, 2)).toFixed(2))

// Function Export
module.exports = circleArea
