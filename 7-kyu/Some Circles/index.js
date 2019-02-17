/*
  Title:
    Some Circles

  Description:
    Write a function that takes as its parameters one or more numbers which are the diameters of circles.
    The function should return the total area of all the circles, rounded to the nearest integer in a string that says "We have this much circle: xyz".
    You don't know how many circles you will be given, but you can assume it will be at least one.

  Examples:
    sumCircles(2) == "We have this much circle: 3"
    sumCircles(2, 3, 4) == "We have this much circle: 23"

  Kata Link:
    https://www.codewars.com/kata/some-circles

  Discuss Link:
    https://www.codewars.com/kata/some-circles/discuss

  Solutions Link:
    https://www.codewars.com/kata/some-circles/solutions
*/

// Long Solution
const sumCircles = (...diameters) => {
  const totalDiamater = diameters.reduce((totalDiameter, diameter) => totalDiameter + Math.PI * (diameter / 2) ** 2, 0)
  return `We have this much circle: ${Math.round(totalDiamater)}`
}

// Function Export
module.exports = sumCircles
