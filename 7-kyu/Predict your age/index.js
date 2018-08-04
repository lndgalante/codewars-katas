/*
  Title:
    Predict your age!

  Description:
    My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

    In honor of my grandfather's memory we will write a function using his formula!

    Take a list of ages when each of your great-grandparent died.
      - Multiply each number by itself.
      - Add them all together.
      - Take the square root of the result.
      - Divide by two.

  Examples:
    predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86

  Notes:
    The result should be rounded down to the nearest integer.

    Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.

  Kata Link:
    https://www.codewars.com/kata/predict-your-age

  Discuss Link:
    https://www.codewars.com/kata/predict-your-age/discuss

  Solutions Link:
    https://www.codewars.com/kata/predict-your-age/solutions
*/

// Long Solution
/*
const predictAge = (...ages) =>
  Math.floor(
    Math.sqrt(
      ages.map(age => age * age).reduce((total, age) => total + age, 0)
    ) / 2
  )
*/

// Short Solution
const predictAge = (...ages) => (Math.hypot(...ages) / 2) | 0

// Function Export
module.exports = predictAge
