/*
  Title:
    Odd or Even?

  Description:
    Given an array of numbers (a list in groovy), determine whether the sum of all of the numbers is odd or even.

    Give your answer in string format as 'odd' or 'even'.

    If the input array is empty consider it as: [0] (array with a zero).

  Examples:
    oddOrEven([0]) returns "even"
    oddOrEven([2, 5, 34, 6]) returns "odd"
    oddOrEven([0, -1, -5]) returns "even"

  Kata Link:
    https://www.codewars.com/kata/odd-or-even/train/javascript

  Discuss Link:
    https://www.codewars.com/kata/odd-or-even/train/javascript/discuss

  Solutions Link:
    https://www.codewars.com/kata/odd-or-even/train/javascript/solutions
*/

// Long Solution
/*
const oddOrEven = array => {
  const total = array.reduce((total, value) => total + value, 0)
  return total % 2 === 0 ? 'even' : 'odd'
}
*/

// Short Solution
const oddOrEven = array =>
  array.reduce((total, value) => total + value, 0) % 2 === 0 ? 'even' : 'odd'

// Function Export
module.exports = oddOrEven
