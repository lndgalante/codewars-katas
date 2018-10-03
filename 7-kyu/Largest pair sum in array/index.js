/*
  Title:
    Largest pair sum in array

  Description:
    Given an array of numbers, find the largest pair sum in the array.

  Examples:
    [10,14,2,23,19] should return 42 (i.e. sum of 23,19)

    [99,2,2,23,19] should return 122 (i.e. sum of 99,23)

  Notes:
    Input array contains minimum two elements and every element is a number.

  Kata Link:
    https://www.codewars.com/kata/largest-pair-sum-in-array

  Discuss Link:
    https://www.codewars.com/kata/largest-pair-sum-in-array/discuss

  Solutions Link:
    https://www.codewars.com/kata/largest-pair-sum-in-array/solutions
*/

// Long Solution
/*
const largestPairSum = numbers => {
  const allSums = numbers.reduce((result, number, index) => {
    const pairs = []

    for (let i = index + 1; i < numbers.length; i++) {
      pairs.push(number + numbers[i])
    }

    return result.concat(pairs)
  }, [])

  return Math.max(...allSums)
}
*/

// Short Solution
const largestPairSum = numbers =>
  [...numbers]
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((total, number) => total + number, 0)

// Function Export
module.exports = largestPairSum
