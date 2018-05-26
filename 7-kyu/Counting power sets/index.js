/*
  Title:
    Counting power sets

  Description:
    In this kata, you must create a function powers/Powers that takes an array,
    and returns the number of subsets possible to create from that list.
    In other words, counts the power sets.

    For instance
      powers([1,2,3]) => 8

    ...due to...
      powers([1,2,3]) =>
      [[],
      [1],
      [2],
      [3],
      [1,2],
      [2,3],
      [1,3],
      [1,2,3]]

    Your function should be able to count sets up to the size of 500, so watch out; pretty big numbers occur there!

    For comparison, my Haskell solution can compute the number of sets for an array of length 90 000 in less than a second, so be quick!

    You should treat each array passed as a set of unique values for this kata.

  Examples:
    powers([])        => 1
    powers([1])       => 2
    powers([1,2])     => 4
    powers([1,2,3,4]) => 16

  Kata Link:
    https://www.codewars.com/kata/counting-power-sets

  Discuss Link:
    https://www.codewars.com/kata/counting-power-sets/discuss

  Solutions Link:
    https://www.codewars.com/kata/counting-power-sets/solutions
*/

// Long Solution
const powers = list => 2 ** list.length

// Function Export
module.exports = powers
