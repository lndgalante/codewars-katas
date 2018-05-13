/*
  Title:
    Sum of all arguments

  Description:
    Write a function that finds the sum of all its arguments.

  Examples:
    sum(1, 2, 3) // => 6
    sum(8, 2) // => 10
    sum(1, 2, 3, 4, 5) // => 15

  Notes:
    Note that Python's function name is sum_args, as to avoid confusion with the preexistsing sum function. Ruby's Array#sum has been removed to make it a bit more interesting!

  Kata Link:
    https://www.codewars.com/kata/sum-of-all-arguments/train/javascript

  Discuss Link:
    https://www.codewars.com/kata/sum-of-all-arguments/train/javascript/discuss

  Solutions Link:
    https://www.codewars.com/kata/sum-of-all-arguments/train/javascript/solutions
*/

// Long Solution
const sum = (...args) => args.reduce((total, value) => total + value, 0)

// Function Export
module.exports = sum
