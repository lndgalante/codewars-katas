/*
  Title:
    Sum of differences between products and LCMs

  Description:
    In this kata you need to create a function that takes a 2D array/list of non-negative integer pairs and returns the sum of all the "saving" that you can have getting the LCM of each couple of number compared to their simple product.

    For example, if you are given:
    [[15,18], [4,5], [12,60]]

    Their product would be:
    [270, 20, 720]

    While their respective LCM would be:
    [90, 20, 60]

    Thus the result should be:
    (270-90)+(20-20)+(720-60) = 840

  Kata Link:
    https://www.codewars.com/kata/sum-of-differences-between-products-and-lcms

  Discuss Link:
    https://www.codewars.com/kata/sum-of-differences-between-products-and-lcms/discuss

  Solutions Link:
    https://www.codewars.com/kata/sum-of-differences-between-products-and-lcms/solutions
*/

// Long Solution
/*
const euclideanAlgorithm = (originalA, originalB) => {
  const a = Math.abs(originalA)
  const b = Math.abs(originalB)

  return b === 0 ? a : euclideanAlgorithm(b, a % b)
}

const leastCommonMultiple = (a, b) => (a === 0 || b === 0 ? 0 : Math.abs(a * b) / euclideanAlgorithm(a, b))

const sumDifferencesBetweenProductsAndLCMs = pairs => {
  const product = pairs.map(([firstInt, secondInt]) => firstInt * secondInt)
  const lcm = pairs.map(([firstInt, secondInt]) => leastCommonMultiple(firstInt, secondInt))

  const difference = Array.from({ length: pairs.length }, (_, index) => product[index] - lcm[index])
  const total = difference.reduce((total, int) => total + int, 0)

  return total
}
*/

// Short Solution
const gcd = (x, y) => (x === 0 ? y : gcd(y % x, x))
const lcm = (x, y) => (x * y === 0 ? 0 : (x * y) / gcd(x, y))

const sumDifferencesBetweenProductsAndLCMs = pairs =>
  pairs
    .map(([firstInt, secondInt]) => firstInt * secondInt - lcm(firstInt, secondInt))
    .reduce((total, int) => total + int, 0)

// Function Export
module.exports = sumDifferencesBetweenProductsAndLCMs
