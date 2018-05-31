/*
  Title:
    Largest Elements

  Description:
    Write a program that outputs the top n elements from a list.

  Examples:
    largest(2, [7,6,5,4,3,2,1]) // => [6,7]

  Kata Link:
    https://www.codewars.com/kata/largest-elements

  Discuss Link:
    https://www.codewars.com/kata/largest-elements/discuss

  Solutions Link:
    https://www.codewars.com/kata/largest-elements/solutions
*/

// Long Solution
const largest = (n, xs) => [...xs].sort((a, b) => a - b).splice(xs.length - n)

// Function Export
module.exports = largest
