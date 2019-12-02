/*
  Title:
    Cartesian coordinates from degree angle

  Description:
    Write a simple function that takes polar coordinates (an angle in degrees and a radius) and returns the equivalent cartesian coordinates (rouded to 10 places).

  Examples:
    coordinates(90,1)
    => (0.0, 1.0)

    coordinates(45, 1)
    => (0.7071067812, 0.7071067812)

  Kata Link:
    https://www.codewars.com/kata/cartesian-coordinates-from-degree-angle

  Discuss Link:
    https://www.codewars.com/kata/cartesian-coordinates-from-degree-angle/discuss

  Solutions Link:
    https://www.codewars.com/kata/cartesian-coordinates-from-degree-angle/solutions
*/

// Long Solution
const round = number => Number(number.toFixed(10))

const coordinates = (degrees, radius) => {
  const radians = (degrees * Math.PI) / 180
  return [round(radius * Math.cos(radians)), round(radius * Math.sin(radians))]
}

// Function Export
module.exports = coordinates
