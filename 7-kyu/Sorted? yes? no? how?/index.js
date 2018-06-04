/*
  Title:
    Sorted? yes? no? how?

  Description:
    Complete the method which accepts an array of integers, and returns one of the following:

    * "yes, ascending" - if the numbers in the array are sorted in an ascending order
    * "yes, descending" - if the numbers in the array are sorted in a descending order
    * "no" - otherwise

    You can assume the array will always be valid, and there will always be one correct answer.

  Kata Link:
    https://www.codewars.com/kata/sorted-yes-no-how

  Discuss Link:
    https://www.codewars.com/kata/sorted-yes-no-how/discuss

  Solutions Link:
    https://www.codewars.com/kata/sorted-yes-no-how/solutions
*/

// Long Solution
/*
const isSortedAndHow = array => {
  const descending = [...array].sort((a, b) => b - a)
  const ascending = [...array].sort((a, b) => a - b)

  if (array.every((number, index) => number === descending[index]))
    return 'yes, descending'

  if (array.every((number, index) => number === ascending[index]))
    return 'yes, ascending'

  return 'no'
}
*/

// Short Solution
const isSortedAndHow = array =>
  array.every((number, i) => i === 0 || number >= array[i - 1])
    ? 'yes, ascending'
    : array.every((number, i) => i === 0 || number <= array[i - 1])
      ? 'yes, descending'
      : 'no'

// Function Export
module.exports = isSortedAndHow
