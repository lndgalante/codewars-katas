/*
  Title:
    Find the first non-consecutive number

  Description:
    Your task is to find the first element of an array that is not consecutive.

    E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non consecutive number.

    If the whole array is consecutive then return null

    The array will always have at least 2 elements and all the elements will be numbers.
    The numbers will also all be unique and in ascending order.
    The numbers could be positive or negative and the first non-consecutive could be either too!

  Kata Link:
    https://www.codewars.com/kata/find-the-first-non-consecutive-number

  Discuss Link:
    https://www.codewars.com/kata/find-the-first-non-consecutive-number/discuss

  Solutions Link:
    https://www.codewars.com/kata/find-the-first-non-consecutive-number/solutions
*/

// Long Solution
/*
function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    const num = arr[i] + 1
    const consecutive = arr[i + 1]
    if (num !== consecutive) return consecutive
  }

  return null
}
*/

// Short Solution
function firstNonConsecutive(arr) {
  const result = arr.find((number, index) => number !== index + arr[0])
  return Number.isInteger(result) ? result : null
}

// Function Export
module.exports = firstNonConsecutive
