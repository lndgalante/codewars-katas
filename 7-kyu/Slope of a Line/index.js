/*
  Title:
    Slope of a Line

  Description:
    Task
    Your challenge is to write a function named getSlope/get_slope/GetSlope that calculates the slope of the line through two points.

    Input
    Each point that the function takes in is an array 2 elements long.
    The first number is the x coordinate and the second number is the y coordinate.
    If the line through the two points is vertical or if the same point is given twice,the function should return null/None.

  Kata Link:
    https://www.codewars.com/kata/slope-of-a-line

  Discuss Link:
    https://www.codewars.com/kata/slope-of-a-line/discuss

  Solutions Link:
    https://www.codewars.com/kata/slope-of-a-line/solutions
*/

// Long Solution
/*
const getSlope = ([x1, y1], [x2, y2]) => {
  const rise = y2 - y1
  const run = x2 - x1

  return run === 0 ? null : rise / run
}
*/

// Short Solution
const getSlope = ([x1, y1], [x2, y2]) =>
  x2 - x1 === 0 ? null : (y2 - y1) / (x2 - x1)

// Function Export
module.exports = getSlope
