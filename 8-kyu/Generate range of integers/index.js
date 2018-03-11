/*
  Title:
    Generate range of integers

  Description:
    Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step.
    The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

    Task
    Implement a function named
      generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
      generateRange(1, 10, 3) // should return array of [1,4,7,10]

    Which takes three arguments and generates a range of integers from min to max, with given step.
    The first is minimum value, second is maximum of range and the third is step.

  Notes:
      min < max
      step > 0

  Kata Link:
    https://www.codewars.com/kata/generate-range-of-integers

  Discuss Link:
    https://www.codewars.com/kata/generate-range-of-integers/discuss

  Solutions Link:
    https://www.codewars.com/kata/generate-range-of-integers/solutions
*/

// Long Solution

function generateRange(min, max, step) {
  const result = []
  for (let i = min; i <= max; i += step) {
    result.push(i)
  }
  return result
}

// Short Solution

// Function Export
module.exports = generateRange
