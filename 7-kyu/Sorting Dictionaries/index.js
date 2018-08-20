/*
  Title:
    Sorting Dictionaries

  Description:
    Python dictionaries are inherently unsorted. So what do you do if you need to sort the contents of a dictionary?

    Create a function that returns a sorted list of (key, value) tuples (Javascript: arrays of 2 items).

    The list must be sorted by the value and be sorted largest to smallest.

  Examples:
    sortDict({3:1, 2:2, 1:3}) == [[1,3], [2,2], [3,1]]
    sortDict({1:2, 2:4, 3:6}) == [[3,6], [2,4], [1,2]]

  Kata Link:
    https://www.codewars.com/kata/sorting-dictionaries

  Discuss Link:
    https://www.codewars.com/kata/sorting-dictionaries/discuss

  Solutions Link:
    https://www.codewars.com/kata/sorting-dictionaries/solutions
*/

// Long Solution
const sortDict = dict =>
  Object.entries(dict)
    .map(([key, value]) => [Number(key) || key, value])
    .sort(([, valueA], [, valueB]) => valueB - valueA)

// Function Export
module.exports = sortDict
