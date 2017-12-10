/* 
  Title:
    Maximum subarray sum

  Description:
    The maximum sum subarray problem consists in finding the maximum sum
    of a contiguous subsequence in an array or list of integers:

    maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
    // should be 6: [4, -1, 2, 1]
    Easy case is when the list is made up of only positive numbers and the maximum sum
    is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

    Empty list is considered to have zero greatest sum. 
    Note that the empty list or array is also a valid sublist/subarray.
  
  Link:
    https://www.codewars.com/kata/maximum-subarray-sum
*/

// Long Solution
function maxSequence(arr) {
  const allPositive = arr.every(num => Math.sign(num) === 1)
  const allNegative = arr.every(num => Math.sign(num) === -1)

  if (allPositive) return arr.reduce((a, b) => a + b, 0)
  if (allNegative || arr.length === 0) return 0

  const combinations = []

  for (let i = 0; i < arr.length; i++) {
    const sublist = arr.map((num, ind) => arr.slice(ind, ind + i))
    combinations.push(...sublist)
  }

  const result = combinations.map(numbers => numbers.reduce((a, b) => a + b, 0))

  return Math.max(...result)
}

// Function Export
module.exports = maxSequence
