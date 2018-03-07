/*
  Title:
    Localize The Barycenter of a Triangle

  Description:
    The medians of a triangle are the segments that unit the vertices with the midpoint of their opposite sides.
    The three medians of a triangle intersect at the same point, called the barycenter or the centroid.
    Given a triangle, defined by the cartesian coordinates of its vertices we need to localize its barycenter or centroid.

    The function bar_triang() or barTriang or bar-triang, receives the coordinates of the three vertices A, B and C as three different arguments and outputs the coordinates of the barycenter O in an array [xO, yO]

    This is how our asked function should work: the result of the coordinates should be expressed up to four decimals, (rounded result).

    You know that the coordinates of the barycenter are given by the following formulas.

    source: imgur.com

    For additional information about this important point of a triangle see at: (https://en.wikipedia.org/wiki/Centroid)

    Let's see some cases:

    barTriang([4, 6], [12, 4], [10, 10]) ------> [8.6667, 6.6667]

    barTriang([4, 2], [12, 2], [6, 10]) ------> [7.3333, 4.6667]
    The given points form a real or a degenerate triangle but in each case the above formulas can be used.

  Kata Link:
    https://www.codewars.com/kata/localize-the-barycenter-of-a-triangle

  Discuss Link:
    https://www.codewars.com/kata/localize-the-barycenter-of-a-triangle/discuss

  Solutions Link:
    https://www.codewars.com/kata/localize-the-barycenter-of-a-triangle/solutions
*/

// Long Solution
/* const barycenterFormula = (pointA, pointB, pointC) =>
  Number(((pointA + pointB + pointC) / 3).toFixed(4))

const barTriang = ([xA, yA], [xB, yB], [xC, yC]) => [
  barycenterFormula(xA, xB, xC),
  barycenterFormula(yA, yB, yC),
] */

// Short Solution
const barTriang = ([xA, yA], [xB, yB], [xC, yC]) =>
  [[xA, xB, xC], [yA, yB, yC]].map(points =>
    Number((points.reduce((total, point) => total + point, 0) / 3).toFixed(4))
  )

// Function Export
module.exports = barTriang
