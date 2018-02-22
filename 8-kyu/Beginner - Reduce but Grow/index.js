/*
  Title:
    Beginner - Reduce but Grow

  Description:
    Given and array of integers (x), return the result of multiplying the values together in order. Example:

    [1, 2, 3] --> 6
    For the beginner, try to use the reduce method - it comes in very handy quite a lot so is a good one to know.

    Array will not be empty.

  Kata Link:
    https://www.codewars.com/kata/beginner-reduce-but-grow

  Discuss Link:
    https://www.codewars.com/kata/beginner-reduce-but-grow/discuss

  Solutions Link:
    https://www.codewars.com/kata/beginner-reduce-but-grow/solutions
*/

// Long Solution
const grow = x => x.reduce((total, value) => total * value, 1)

// Function Export
module.exports = grow
