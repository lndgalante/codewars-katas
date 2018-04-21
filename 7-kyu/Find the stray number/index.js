/*
  Title:
    Find the stray number

  Description:
    You are given an odd-length array of integers, in which all of them are the same, except for one single number.

    Complete the method which accepts such an array, and returns that single different number.

  Examples:
    [1, 1, 2] ==> 2
    [17, 17, 3, 17, 17, 17, 17] ==> 3

  Notes:
    The input array will always be valid! (odd-length >= 3)

  Kata Link:
    https://www.codewars.com/kata/find-the-stray-number

  Discuss Link:
    https://www.codewars.com/kata/find-the-stray-number/discuss

  Solutions Link:
    https://www.codewars.com/kata/find-the-stray-number/solutions
*/

// Long Solution
const stray = numbers =>
  numbers.find(
    number => numbers.indexOf(number) === numbers.lastIndexOf(number)
  )

// Function Export
module.exports = stray
