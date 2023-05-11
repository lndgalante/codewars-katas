/*
  Title:
    Quadratic Coefficients Solver

  Description:
    In this Kata you are expected to find the coefficients of quadratic equation of the given two roots (x1 and x2).

    Equation will be the form of ax^2 + bx + c = 0

    Return type is a Vector (tuple in Rust, Array in Ruby) containing coefficients of the equations in the order (a, b, c).

    Since there are infinitely many solutions to this problem, we fix a = 1.

    Remember, the roots can be written like (x-x1) * (x-x2) = 0

  Examples:
    quadratic(1,2) = (1, -3, 2)
    This means (x-1) * (x-2) = 0; when we do the multiplication this becomes x^2 - 3x + 2 = 0

    quadratic(0,1) = (1, -1, 0)
    This means (x-0) * (x-1) = 0; when we do the multiplication this becomes x^2 - x + 0 = 0

  Notes:
    - Inputs will be integers.
    - When x1 == x2, this means the root has the multiplicity of two

  Kata Link:
    https://www.codewars.com/kata/59441520102eaa25260000bf

  Discuss Link:
    https://www.codewars.com/kata/59441520102eaa25260000bf/discuss

  Solutions Link:
    https://www.codewars.com/kata/59441520102eaa25260000bf/solutions
*/

// Long Solution
function quadratic(x1, x2) {
  return [1, -(x1 + x2), x1 * x2]
}

// Function Export
module.exports = quadratic
