/*
  Title:
    Pre-FizzBuzz Workout #1

  Description:
    This is the first step to understanding FizzBuzz.

    Your inputs: a positive integer, n, greater than or equal to one.
    n is provided, you have NO CONTROL over its value.

    Your expected outputs: an array of positive integers from 1 to n

    Your job is to write an algorithm that gets you from the input to the output.

  Kata Link:
    https://www.codewars.com/kata/pre-fizzbuzz-workout-number-1

  Discuss Link:
    https://www.codewars.com/kata/pre-fizzbuzz-workout-number-1/discuss

  Solutions Link:
    https://www.codewars.com/kata/pre-fizzbuzz-workout-number-1/solutions
*/

// Long Solution
// const preFizz = n => Array.from(Array(n), (_, i) => i + 1)

// Short Solution
const preFizz = n => [...new Array(n)].map((_, i) => i + 1)

// Function Export
module.exports = preFizz
