/*
  Title:
    Smallest value of an array

  Description:
    Write a function that can return the smallest value of an array or the index of that value.
    The function's 2nd parameter will tell whether it should return the value or the index.

    Assume the first parameter will always be an array filled with at least 1 number and no duplicates.
    Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

  Examples:
    min([1,2,3,4,5], 'value') // => 1
    min([1,2,3,4,5], 'index') // => 0

  Kata Link:
    https://www.codewars.com/kata/smallest-value-of-an-array

  Discuss Link:
    https://www.codewars.com/kata/smallest-value-of-an-array/discuss

  Solutions Link:
    https://www.codewars.com/kata/smallest-value-of-an-array/solutions
*/

// Long Solution
const min = (array, toReturn) => {
  const minimum = Math.min(...array)

  if (toReturn === 'value') return minimum
  if (toReturn === 'index') return array.indexOf(minimum)
}

// Function Export
module.exports = min
