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

  Kata Link:
    https://www.codewars.com/kata/maximum-subarray-sum

  Discuss Link:
    https://www.codewars.com/kata/maximum-subarray-sum/discuss

  Solutions Link:
    https://www.codewars.com/kata/maximum-subarray-sum/solutions
*/

// Long Solution
function maxSequence(array) {
  const allPositive = array.every(number => Math.sign(number) === 1)
  const allNegative = array.every(number => Math.sign(number) === -1)

  if (allPositive) return array.reduce((a, b) => a + b, 0)
  if (allNegative || array.length === 0) return 0

  const combinations = []

  for (let i = 0; i < array.length; i++) {
    const sublist = array.map((number, ind) => array.slice(ind, ind + i))
    combinations.push(...sublist)
  }

  const result = combinations.map(numbers => numbers.reduce((a, b) => a + b, 0))

  return Math.max(...result)
}

// Function Export
module.exports = maxSequence
