/*
  Title:
    Are the numbers in order?

  Description:
    In this Kata, your function receives an array of positive integers as input.
    Your task is to determine whether the numbers are in ascending order.

    For the purposes of this Kata, you may assume that all inputs are valid (i.e. arrays containing only positive integers with a length of at least 2).

  Examples:
    in_asc_order({1,2,4,7,19}, 5); // returns true
    in_asc_order({1,2,3,4,5}, 5); // returns true
    in_asc_order({1,6,10,18,2,4,20}, 7); // returns false
    in_asc_order({9,8,7,6,5,4,3,2,1}, 9); // returns false because the numbers are in DESCENDING order

  Notes:
    If time, try to optimise and shorten your code as much as possible.

  Kata Link:
    https://www.codewars.com/kata/are-the-numbers-in-order

  Discuss Link:
    https://www.codewars.com/kata/are-the-numbers-in-order/discuss

  Solutions Link:
    https://www.codewars.com/kata/are-the-numbers-in-order/solutions
*/

// Long Solution
/*
const inAscOrder = arr => {
  const ascending = [...arr].sort((a, b) => a - b)
  const descending = [...arr].sort((a, b) => b - a)

  return JSON.stringify(arr) === JSON.stringify(ascending)
}
*/

// Short Solution
const inAscOrder = arr => arr.every((_, i) => i === 0 || arr[i] > arr[i - 1])

// Function Export
module.exports = inAscOrder
