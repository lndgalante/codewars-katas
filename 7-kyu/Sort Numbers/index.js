/*
  Title:

  Description:
    Finish the solution so that it sorts the passed in array of numbers.
    If the function passes in an empty array or null/nil value then it should return an empty array.

  Examples:
    solution([1, 2, 10, 50, 5]);
      // should return [1,2,5,10,50]
    solution(null);
      // should return []

  Kata Link:
    https://www.codewars.com/kata/sort-numbers

  Discuss Link:
    https://www.codewars.com/kata/sort-numbers/discuss

  Solutions Link:
    https://www.codewars.com/kata/sort-numbers/solutions
*/

// Long Solution
/*
function solution(nums) {
  if (!Array.isArray(nums)) return []

  return nums.sort((a, b) => a - b)
}
*/

// Short Solution
const solution = nums => (Array.isArray(nums) ? nums.sort((a, b) => a - b) : [])

// Function Export
module.exports = solution
