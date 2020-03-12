/*
  Title:
    What dominates your array?

  Description:
    A zero-indexed array arr consisting of n integers is given.
    The dominator of array arr is the value that occurs in more than half of the elements of arr.

    For example, consider array arr such that arr = [3,4,3,2,3,1,3,3].
    The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.

    Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr.
    The function should return −1 if array does not have a dominator. All values in arr will be >=0.

  Kata Link:
    https://www.codewars.com/kata/what-dominates-your-array

  Discuss Link:
    https://www.codewars.com/kata/what-dominates-your-array/discuss

  Solutions Link:
    https://www.codewars.com/kata/what-dominates-your-array/solutions
*/

// Long Solution
const dominator = array => {
  const halfLength = array.length / 2

  const repetitions = Object.entries(array.reduce((acc, value) => ({ ...acc, [value]: (acc[value] || 0) + 1 }), {}))
  const [dominator] = repetitions.find(([_, repetition]) => repetition > halfLength) || []

  return dominator ? Number(dominator) : -1
}

// Function Export
module.exports = dominator
