/*
  Title:
    Is this a triangle?

  Description:
    Implement a method that accepts 3 integer values a, b, c.
    The method should return true if a triangle can be built with the sides
    of given length and false in any other case.

    (In this case, all triangles must have surface greater than 0 to be accepted).

  Kata Link:
    https://www.codewars.com/kata/is-this-a-triangle

  Discuss Link:
    https://www.codewars.com/kata/is-this-a-triangle/discuss

  Solutions Link:
    https://www.codewars.com/kata/is-this-a-triangle/solutions
*/

// Long Solution
function isTriangle(a, b, c) {
  const semiperimeter = (a + b + c) / 2
  const area = Math.sqrt(
    semiperimeter *
      (semiperimeter - a) *
      (semiperimeter - b) *
      (semiperimeter - c)
  )

  if (Number.isNaN(area)) return false
  return area > 0
}

// Function Export
module.exports = isTriangle
