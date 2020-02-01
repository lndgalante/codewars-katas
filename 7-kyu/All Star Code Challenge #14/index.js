/*
  Title:
    All Star Code Challenge #14

  Description:
    Your non-profit company has assigned you the task of calculating some simple statistics on donations.
    You have a very LONG array of integers, representing various amounts of donations your company has been given.
    In particular, you're interested in the median value for donations.

    The median is the middle number of a sorted list of numbers.
    If the list is of even length, the 2 middle values are averaged.

    Write a function called median() that takes an array of integers as an argument and returns the median of those integers.

  Examples:
    median([33,99,100,30,29,50]) // =>  41.5
    median([3,2,1]) // => 2

  Notes:
    The sorting step is vital

  Kata Link:
    https://www.codewars.com/kata/5864eb8039c5ab9cd400005c

  Discuss Link:
    https://www.codewars.com/kata/5864eb8039c5ab9cd400005c/discuss

  Solutions Link:
    https://www.codewars.com/kata/5864eb8039c5ab9cd400005c/solutions
*/

// The median is the middle number of a sorted list of numbers. If the list is of even length, the 2 middle values are averaged.

// Long Solution
const median = (array) => {
  const sortedDonations = [...array].sort((a, b) => a - b)

  const { length } = sortedDonations
  const halfLength = Math.floor(length / 2)

  const middleNumber = sortedDonations[halfLength]
  const previousMiddleNumber = sortedDonations[halfLength - 1]

  const median = length % 2 === 0 ? (middleNumber + previousMiddleNumber) / 2 : middleNumber
  return median
}

// Function Export
module.exports = median
