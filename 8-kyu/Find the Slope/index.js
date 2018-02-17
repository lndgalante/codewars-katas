/*
  Title:
    Find the Slope

  Description:
    Given an array of 4 integers
    [a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.

    For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.
      a:x1
      b:y1
      c:x2
      d:y2

    Assume that [a, b, c, d] and the answer are all integers (no floating numbers!).
    Slope: https://en.wikipedia.org/wiki/Slope

  Kata Link:
    https://www.codewars.com/kata/find-the-slope

  Discuss Link:
    https://www.codewars.com/kata/find-the-slope/discuss

  Solutions Link:
    https://www.codewars.com/kata/find-the-slope/solutions
*/

// Long Solution
const slope = ([x1, y1, x2, y2]) => {
  const result = (y2 - y1) / (x2 - x1)
  return isFinite(result) ? `${result}` : 'undefined'
}

// Function Export
module.exports = slope
