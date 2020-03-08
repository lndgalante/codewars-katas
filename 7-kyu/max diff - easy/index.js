/*
  Title:
    max diff - easy

  Description:
    You must implement a function maxDiff that return the difference between the biggest and the smallest value in a list(lst) received as parameter.

    The list(lst) contains integers, that means it may contain some negative numbers.

    If the list is empty or contains a single element, return 0.

    The list(lst) is not sorted.

  Examples:
    maxDiff([1, 2, 3, 4]); //return 3, because 4 - 1 == 3
    maxDiff([1, 2, 3, -4]); //return 7, because 3 - (-4) == 7

  Kata Link:
    https://www.codewars.com/kata/max-diff-easy-1

  Discuss Link:
    https://www.codewars.com/kata/max-diff-easy-1/discuss

  Solutions Link:
    https://www.codewars.com/kata/max-diff-easy-1/solutions
*/

// Long Solution
/*
const maxDiff = list => {
  if (!list.length || list.length === 1) return 0
  return Math.max(...list) - Math.min(...list)
}
*/

// Short Solution
const maxDiff = list => (list.length > 0 ? Math.max(...list) - Math.min(...list) : 0)

// Function Export
module.exports = maxDiff
