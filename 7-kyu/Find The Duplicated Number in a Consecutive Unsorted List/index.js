/*
  Title:
    Find The Duplicated Number in a Consecutive Unsorted List

  Description:
    You are given an array of n+1 integers 1 through n. In addition there is a single duplicate integer.

    The array is unsorted.

    An example valid array would be [3, 2, 5, 1, 3, 4].
    It has the integers 1 through 5 and 3 is duplicated. [1, 2, 4, 5, 5] would not be valid as it is missing 3.

    You should return the duplicate value as a single integer.

  Kata Link:
    https://www.codewars.com/kata/find-the-duplicated-number-in-a-consecutive-unsorted-list

  Discuss Link:
    https://www.codewars.com/kata/find-the-duplicated-number-in-a-consecutive-unsorted-list/discuss

  Solutions Link:
    https://www.codewars.com/kata/find-the-duplicated-number-in-a-consecutive-unsorted-list/solutions
*/

// Long Solution
const findDup = array => array.find(number => array.indexOf(number) !== array.lastIndexOf(number))

// Function Export
module.exports = findDup
