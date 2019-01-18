/*
  Title:
    Nice Array

  Description:
    A Nice array is defined to be an array where for every value n in the array, there is also an element n-1 or n+1 in the array.

    In example:
    [2,10,9,3] is Nice array because

    2=3-1
    10=9+1
    3=2+1
    9=10-1

    Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false.
    You should also return false if input array has no elements.

  Kata Link:
    https://www.codewars.com/kata/nice-array

  Discuss Link:
    https://www.codewars.com/kata/nice-array/discuss

  Solutions Link:
    https://www.codewars.com/kata/nice-array/solutions
*/

// Long Solution
/*
const isNice = arr =>
  !arr.length ? false : arr.every((number, _, array) => array.includes(number + 1) || array.includes(number - 1))
*/

// Short Solution
const isNice = arr =>
  Boolean(arr.length) && arr.every((number, _, array) => array.includes(number + 1) || array.includes(number - 1))

// Function Export
module.exports = isNice
