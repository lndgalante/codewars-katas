/*
  Title:
    Sum of numerous arguments

  Description:
    After calling the function findSum() with any number of non-negative integer arguments, it should return the sum of all those arguments.
    If no arguments are given, the function should return 0, if negative arguments are given, it should return -1.

  Examples:
    findSum(1,2,3,4); // returns 10
    findSum(1,-2);    // returns -1
    findSum();        // returns 0

  Notes:
    Research the arguments object on google or read Chapter 4 from Eloquent Javascript

  Kata Link:
    https://www.codewars.com/kata/sum-of-numerous-arguments

  Discuss Link:
    https://www.codewars.com/kata/sum-of-numerous-arguments/discuss

  Solutions Link:
    https://www.codewars.com/kata/sum-of-numerous-arguments/solutions
*/

// Long Solution
/*
const findSum = (...args) =>
  args.some(value => value < 0)
    ? -1
    : args.reduce((total, value) => total + value, 0)
*/

// Short Solution
const findSum = (...args) =>
  args.reduce(
    (total, value) => (total < 0 || value < 0 ? -1 : total + value),
    0
  )

// Function Export
module.exports = findSum
