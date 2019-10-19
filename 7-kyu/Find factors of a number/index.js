/*
  Title:
    Find factors of a number

  Description:
    Create a function that takes a number and finds the factors of it, listing them in descending order in an array.
    If the parameter is not an integer or less than 1, return -1. In C# return an empty array.

  Examples:
    factors(54) should return [54, 27, 18, 9, 6, 3, 2, 1]

  Kata Link:
    https://www.codewars.com/kata/find-factors-of-a-number

  Discuss Link:
    https://www.codewars.com/kata/find-factors-of-a-number/discuss

  Solutions Link:
    https://www.codewars.com/kata/find-factors-of-a-number/solutions
*/

// Long Solution
const factors = number => {
  const factorsFound = Array.from({ length: number + 1 }, (_, index) => index)
    .filter(index => number % index === 0)
    .sort((a, b) => b - a)

  return factorsFound.length === 0 ? -1 : factorsFound
}

// Function Export
module.exports = factors
